import React from 'react'
function CheckBox({
    name,
    value,
    tick,
    onCheck
  }) {
    return React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
      name: name,
      type: "checkbox",
      value: value,
      checked: tick || false,
      onChange: onCheck
    }), value);
  }
  
  function CheckBoxList({
    options,
    isSelectedAll,
    onCheck
  }) {
    const checkBoxOptions = /*#__PURE__*/React.createElement("div", {
      className: "checkbox-list"
    }, options.map((option, index) => {
      return /*#__PURE__*/React.createElement(CheckBox, {
        key: index,
        name: option.name,
        value: option.value,
        tick: option.checked,
        onCheck: e => onCheck(option.value, e.target.checked)
      });
    }));
    return /*#__PURE__*/React.createElement("div", {
      className: "checkbox-list"
    }, /*#__PURE__*/React.createElement(CheckBox, {
      name: "select-all",
      value: "ALL",
      tick: isSelectedAll,
      onCheck: e => onCheck('all', e.target.checked)
    }), checkBoxOptions);
  }
  
  class CityList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isSelectedAll: false,
        checkList: [{
          name: "color",
          value: "red",
          checked: false
        }, {
          name: "color",
          value: "green",
          checked: false
        }, {
          name: "color",
          value: "blue",
          checked: false
        }]
      };
    }
  
    onCheckBoxChange(checkName, isSelected) {
      let isAllChecked = checkName === 'all' && isSelected;
      let isAllUnChecked = checkName === 'all' && !isSelected;
      const checked = isSelected;
      const checkList = this.state.checkList.map((color, index) => {
        if (isAllChecked || color.value === checkName) {
          return Object.assign({}, color, {
            checked
          });
        } else if (isAllUnChecked) {
          return Object.assign({}, color, {
            checked: false
          });
        }
  
        return color;
      });
      let isCheckedAll = checkList.findIndex(item => item.checked === false) === -1 || isAllChecked;
      this.setState({
        checkList,
        isCheckedAll
      });
    }
  
    render() {
      return /*#__PURE__*/React.createElement(CheckBoxList, {
        options: this.state.checkList,
        isCheckedAll: this.state.isCheckedAll,
        onCheck: this.onCheckBoxChange.bind(this)
      });
    }
  
  }
  