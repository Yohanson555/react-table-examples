import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Layout, Menu } from 'antd';
import * as Examples from './examples';
import MyExample from './MyExample';
import { selectExample } from './redux/actions';

import 'antd/dist/antd.css';

const { Sider, Content } = Layout;

const ExamplesList = {
  "My": "My Example",
  "Basic": "Basic",
  "BlockLayout": "Block Layout",
  "Bootstrap": "Bootstrap",
  "BootstrapUI": "Bootstrap UI components",
  "ColumnHiding": "Column Hiding",
  "ColumnOrdering": "Column Ordering",
  "ColumnResizing": "Column Resizing",
  "DataDriveClassesAndStyles": "Data Drive Classes And Styles",
  "EditableData": "Editable Data",
  "Expanding": "Expanding",
  "Filtering": "Filtering",
  "Footers": "Footers",
  "FullWidthResizableTable": "Full Width Resizable Table",
  "FullWidthTable": "Full Width Table",
  "Grouping": "Grouping",
  "GroupingColumn": "Grouping Column",
  "KitchenSink": "Kitchen Sink",
  "KitchenSinkControlled": "Kitchen Sink Controlled",
  "Pagination": "Pagination",
  "RowSelection": "Row Selection",
  "RowSelectionAndPaggination": "Row Selection With Paggination",
  "Sorting": "Sorting",
  "SubComponents": "Sub Components",
  "SubComponentsLazy": "Sub Components (Lazy)"
};

class App extends Component {
  constructor() {
    super();

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(item) {
    const { key } = item;
    console.log("menu pressed: ", item);
    this.props.selectExample(key);
  }

  renderSide() {
    return (
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <Menu
          onClick={this.handleSelect}
          //style={{ width: 320 }}
          //defaultSelectedKeys={['1']}
          mode="inline"
        >
          {_.map(ExamplesList, (value, key) => {
            return <Menu.Item key={key}>{value}</Menu.Item>;
          })}
        </Menu>
      </Sider>
    );
  }
  
  renderContent() {
    const { example } = this.props;

    let ExampleComponent;
   
    if (Examples[example]) {
      ExampleComponent = Examples[example];
    } else {
      ExampleComponent = MyExample;
    }

    return (
      <Layout className="site-layout" style={{ marginLeft: 210 }}>
        <Content
          style={{
            overflow: 'auto',
            height: '100vh',
          }}
        >
          <ExampleComponent />
        </Content>
      </Layout>
    );
  }

  render() {
    return (
        <Layout>
          {this.renderSide()}
          {this.renderContent()}
        </Layout>
    );
  }
};

const mapStateToProps = (state) => {
  const { example } = state;

  return { example };
};

export default connect(mapStateToProps, { selectExample })(App);
