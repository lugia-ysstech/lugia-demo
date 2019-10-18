import React from "react";
import styled from "styled-components";
import {Theme} from "@lugia/lugia-web";
import {Card} from "@lugia/lugia-web";
import {Label} from "@lugia/lugia-web";
import {Button} from "@lugia/lugia-web";
import {Radio} from "@lugia/lugia-web";
import {Input} from "@lugia/lugia-web";
import {LugiadCore} from "@lugia/lugia-web";
const {themeHandle} = LugiadCore;

class ChildPadComponent0 extends React.Component {
  render() {
    const {onChange, onAddList} = this.props;
    return (
      <React.Fragment>
        <div
          style={{
            position: "absolute",
            width: 800 + "px",
            height: 32 + "px",
            zIndex: "0",
            left: 25.93670886075961 + "px",
            top: 9 + "px"
          }}
        >
          <Theme
            config={{
              "wbc*sBq1": themeHandle("wbc*sBq1", undefined, {
                Container: {normal: {height: 32, width: 800}},
                Input: {
                  active: {background: "none", border: "none"},
                  hover: {background: {color: "#dddddd"}, border: "none"},
                  normal: {background: {color: "#e8e8e8"}, border: "none"}
                }
              })
            }}
          >
            <Input
              viewClass="wbc*sBq1"
              autoFocus=""
              disabled=""
              readOnly=""
              size={`default`}
              type={`text`}
              validateStatus={`success`}
              validateType={`default`}
              onChange={onChange}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            width: 120 + "px",
            height: 32 + "px",
            zIndex: "1",
            left: 844 + "px",
            top: 8 + "px"
          }}
        >
          <Theme
            config={{
              wbcZg6K2: themeHandle("wbcZg6K2", undefined, {
                Container: {normal: {width: 120}}
              })
            }}
          >
            <Button
              viewClass="wbcZg6K2"
              block=""
              disabled=""
              shape={`default`}
              size={`default`}
              text={`添加代办`}
              type={`primary`}
              onClick={onAddList}
            />
          </Theme>
        </div>
      </React.Fragment>
    );
  }
}

class ChildPadComponent1 extends React.Component {
  handleSelect = (id) => () => {
    const {onSelectList} = this.props;
    onSelectList(id);
  };

  render() {
    const {id, time, content, checked} = this.props;
    return (
      <React.Fragment>
        <div
          style={{
            position: "absolute",
            width: 182 + "px",
            height: 18 + "px",
            zIndex: "0",
            left: 37 + "px",
            top: 18 + "px"
          }}
        >
          <Theme
            config={{
              wbcdGc122: themeHandle("wbcdGc122", undefined, {
                LabelConfig: {
                  normal: {
                    color: "#333333",
                    font: {
                      family: "",
                      size: 16,
                      style: "normal",
                      weight: "normal"
                    }
                  }
                }
              })
            }}
          >
            <Label viewClass="wbcdGc122" text={content}/>
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            width: 70 + "px",
            height: 16 + "px",
            zIndex: "1",
            left: 834 + "px",
            top: 18.5 + "px"
          }}
        >
          <Theme
            config={{
              wbc1fA823: themeHandle("wbc1fA823", undefined, {
                LabelConfig: {
                  normal: {
                    color: "#999999",
                    font: {
                      family: "",
                      size: 14,
                      style: "normal",
                      weight: "normal"
                    }
                  }
                }
              })
            }}
          >
            <Label viewClass="wbc1fA823" text={time}/>
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            width: 36 + "px",
            height: 26 + "px",
            zIndex: "2",
            left: 12.486819184763135 + "px",
            top: 11.64208570433152 + "px"
          }}
        >
          <Theme
            config={{"wbcuB5&24": themeHandle("wbcuB5&24", undefined, {})}}
          >
            <Radio checked={checked} onChange={this.handleSelect(id)} value={id}/>
          </Theme>
        </div>
      </React.Fragment>
    );
  }
}

class ChildPadComponent7 extends React.Component {
  render() {
    const {list, selectList, onSelectList} = this.props;
    let theList;
    if (!list || !list.length) {
      theList = <span>暂无待办事项！</span>
    } else {
      theList = list.map(item => <React.Fragment>
        <div
          style={{
            // position: "absolute",
            width: 920 + "px",
            height: 50 + "px",
            zIndex: "0",
            // left: 43.532162231981374 + "px",
            // top: 151.48927925600628 + "px"
            margin: '20px'
          }}
        >
          <Theme
            config={{
              "wbcfB%C1": themeHandle("wbcfB%C1", undefined, {
                Container: {normal: {height: 50, width: 920}}
              })
            }}
          >
            <Card height={130} width={350} viewClass="wbcfB%C1"><ChildPadComponent1 onSelectList={onSelectList}
                                                                                    id={item.id} time={item.time}
                                                                                    content={item.content}
                                                                                    checked={selectList.indexOf(item.id) > -1}/></Card>
          </Theme>
        </div>
      </React.Fragment>)
    }
    return theList;
  }
}

export default class Page extends React.Component {
  addList = () => {
    const {addList} = this.props;
    if (!this.inputValue) return;
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const id = date.valueOf().toString();
    const newList = {
      content: this.inputValue,
      id: id,
      time: `${year}.${month}.${day}`
    };
    addList(newList);
  };

  onInputChange = ({newValue}) => {
    this.inputValue = newValue;
  };

  selectList = (listId) => {
    const {onSelect} = this.props;
    onSelect({listId});
  };

  deleteList = () => {
    const {deleteList, refreshDisable} = this.props;
    if (refreshDisable) return;
    deleteList();
  };

  render() {
    const {deleteAllList, refreshDisable, list, selectList} = this.props;
    return (
      <div
        style={{
          width: "1000.3469387755104px",
          height: "691.5612244897959px",
          zIndex: "4000",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 1020 + "px",
            height: 600 + "px",
            zIndex: "0",
            left: 0.34693877551035257 + "px",
            top: 64.1530612244901 + "px",
            overflowY: 'scroll'
          }}
        >
          <Theme
            config={{
              wbc4QQx0: themeHandle("wbc4QQx0", undefined, {
                Container: {normal: {height: 576, width: 1000}}
              })
            }}
          >
            <Card height={130} width={350} viewClass="wbc4QQx0">
              <ChildPadComponent7 list={list} selectList={selectList} onSelectList={this.selectList} height={130}
                                  width={350}/>
            </Card>
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            width: 1000 + "px",
            height: 50 + "px",
            zIndex: "1",
            left: 0 + "px",
            top: 641.5612244897959 + "px"
          }}
        >
          <Theme
            config={{
              wbcuOVs0: themeHandle("wbcuOVs0", undefined, {
                Container: {
                  normal: {border: "none", height: 50, width: 1000}
                }
              })
            }}
          >
            <Card height={130} width={350} viewClass="wbcuOVs0">
              <ChildPadComponent0 height={130} width={350} onAddList={this.addList} onChange={this.onInputChange}/>
            </Card>
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            width: 238 + "px",
            height: 16 + "px",
            zIndex: "2",
            left: 38.79746835443041 + "px",
            top: 28.959183673469397 + "px"
          }}
        >
          <Theme
            config={{
              wbcP0x00: themeHandle("wbcP0x00", undefined, {
                LabelConfig: {
                  normal: {
                    color: "#999999",
                    font: {
                      family: "",
                      size: 14,
                      style: "normal",
                      weight: "normal"
                    }
                  }
                }
              })
            }}
          >
            <Label
              viewClass="wbcP0x00"
              text={`代办事件任务栏显示最近要代办的事件`}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            width: 72 + "px",
            height: 20 + "px",
            zIndex: "3",
            left: 38.79746835443041 + "px",
            top: 0 + "px"
          }}
        >
          <Theme
            config={{
              wbchtWo0: themeHandle("wbchtWo0", undefined, {
                LabelConfig: {
                  normal: {
                    color: "",
                    font: {
                      family: "",
                      size: 18,
                      style: "normal",
                      weight: "normal"
                    }
                  }
                }
              })
            }}
          >
            <Label viewClass="wbchtWo0" text={`代办事项`}/>
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            width: 122 + "px",
            height: 32 + "px",
            zIndex: "4",
            left: 839.7974683544303 + "px",
            top: 3.9280547662103515 + "px"
          }}
        >
          <Theme
            config={{
              "wbcu2J%0": themeHandle("wbcu2J%0", undefined, {
                ButtonText: {
                  focus: {
                    color: "#ffffff",
                    font: {
                      family: "",
                      size: "",
                      style: "normal",
                      weight: "normal"
                    }
                  },
                  hover: {
                    color: "#ffffff",
                    font: {
                      family: "",
                      size: "",
                      style: "normal",
                      weight: "normal"
                    }
                  },
                  normal: {
                    color: "#666666",
                    font: {
                      family: "",
                      size: "",
                      style: "normal",
                      weight: "normal"
                    }
                  }
                },
                Container: {
                  active: {background: {color: "#bf0000"}, border: "none"},
                  focus: {background: {color: "#d50101"}},
                  hover: {background: {color: "#d50101"}, border: "none"},
                  normal: {
                    background: "none",
                    border: {
                      all: {color: "#999999", style: "solid", width: ""},
                      bottom: {color: "#999999", style: "solid", width: ""},
                      left: {color: "#999999", style: "solid", width: ""},
                      right: {color: "#999999", style: "solid", width: ""},
                      top: {color: "#999999", style: "solid", width: ""}
                    }
                  }
                }
              })
            }}
          >
            <Button
              viewClass="wbcu2J%0"
              block=""
              disabled=""
              shape={`default`}
              size={`default`}
              text={`清空全部代办`}
              type={`primary`}
              onClick={deleteAllList}
            />
          </Theme>
        </div>
        <div
          style={{
            position: "absolute",
            width: 64 + "px",
            height: 32 + "px",
            zIndex: "5",
            left: 761.7974683544303 + "px",
            top: 3.9280547662103515 + "px"
          }}
        >
          <Theme
            config={{
              "wbc)ya90": themeHandle("wbc)ya90", undefined, {
                ButtonText: {
                  active: {
                    color: "#ffffff",
                    font: {
                      family: "",
                      size: "",
                      style: "normal",
                      weight: "normal"
                    }
                  },
                  disabled: {
                    color: "#666666",
                    font: {
                      family: "",
                      size: "",
                      style: "normal",
                      weight: "normal"
                    }
                  },
                  focus: {
                    color: "#ffffff",
                    font: {
                      family: "",
                      size: "",
                      style: "normal",
                      weight: "normal"
                    }
                  },
                  normal: {
                    color: "#ffffff",
                    font: {
                      family: "",
                      size: "",
                      style: "normal",
                      weight: "normal"
                    }
                  }
                },
                Container: {
                  active: {background: {color: "#d50101"}, border: "none"},
                  disabled: {
                    background: {color: "#e8e8e8"},
                    border: "none"
                  },
                  focus: {background: {color: "#d50101"}},
                  hover: {background: {color: "#c30000"}},
                  normal: {background: {color: "#d50101"}, border: "none"}
                }
              })
            }}
          >
            <Button
              viewClass="wbc)ya90"
              block=""
              disabled={refreshDisable}
              shape={`default`}
              size={`default`}
              text={`删除`}
              type={`primary`}
              onClick={this.deleteList}
            />
          </Theme>
        </div>
      </div>
    );
  }
}

// const TodoList = connect(
//   todoModel,
//   state => {
//     const list = state.get('list') || [];
//     const theList = list.toJS ? list.toJS() : list;
//     const disabled = state.get('refreshDisable');
//
//     return {
//       list: theList,
//       btnDisabled: disabled
//     };
//   },
//   mutations => {
//     const {addList, deleteList, deleteAllList, selectList} = mutations;
//     return {
//       onSelect: selectList, addList, deleteList, deleteAllList
//     }
//   }
// )(Page);
// export default TodoList;
