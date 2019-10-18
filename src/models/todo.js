import lugiax from '@lugia/lugiax';

const model = 'todo';
const defaultList = [{
  content: '明天下班要去接孩子，想着该去物业交取暖费了。',
  id: '0',
  time: '2019.09.28'
}, {
  content: '16号前交付鑫哥设计稿。',
  id: '1',
  time: '2019.10.16'
}];

export default lugiax.register({
  model,
  state: {
    list: defaultList,
    refreshDisable: true,
    selectList: []
  },
  mutations: {
    sync: {
      addList(states, params) {
        const stateList = states.get('list');
        const {eventArgs: list} = params;
        const newList = stateList.push(list);
        return states.set('list', newList);
      },
      deleteList(states) {
        const selectList = states.get('selectList');
        const stateList = states.get('list');
        const delList = stateList.filter(item => {
          const theItem = item.toJS ? item.toJS() : item;
          return selectList.indexOf(theItem.id) < 0;
        });
        return states.set('list', delList);
      },
      deleteAllList(states) {
        const stateList = states.get('list');
        const theState = states.set('refreshDisable', true);
        const clearList  = stateList.clear();
        return theState.set('list', clearList);
      },
      selectList(states, params) {
        const selectList = states.get('selectList');
        const {eventArgs} = params;
        const {listId} = eventArgs;
        const selected = selectList.includes(listId);
        let theSelectList;
        if (selected) {
          const index = selectList.indexOf(listId);
          theSelectList = selectList.splice(index, 1);
        } else {
          theSelectList = selectList.push(listId);
        }

        const refreshDisable = theSelectList.isEmpty();
        const theState = states.set('refreshDisable', refreshDisable);
        return theState.set('selectList', theSelectList);
      }
    },
    async: {}
  }
});
