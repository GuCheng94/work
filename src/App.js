import React, {Component} from 'react';
import './app.css';
import axios from 'axios';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
  }
  componentDidMount(){
		var that = this;
		axios.get("/v2/5be3ced42f00006d00d9f13b")
		.then(function(res){                        
			console.log(res.data.apis);
			that.setState({
				list:res.data.apis     
			})
		})
  }
  
  getState(data){
      this.state.list.map(function(item,index){
        item.map(function(items,index){
            return items=items.filter(a=>a.tags===this.refs.ipt.value)
        })
      })
  }
  //const dataOne = data.filter(item=>item.age==="this.refs.ipt.value")
    //console.log(dataOne);
  render() {
    console.log(this.state.list)
    return (
      <div>
        <input type="text" ref="ipt" onBlur={()=>this.getState(this.refs.ipt.value)}/>
        <table>
          <thead>
          <tr>
            <th width='100'>name</th>
            <th width='100'>description</th>
            <th width='100'>image</th>
            <th width='100'>baseURL</th>
            <th width='100'>tags</th>
            <th width='100'>properties</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.list.map(function(item,index){
                  <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.image}</td>
                        <td>{item.baseURL}</td>
                        {item.tags.map(function(item1,index){
                         return <td key={index}>{item1}</td>
                        })}
                        {item.properties.map(function(item2,index){
                         return <td key={index}>{item2.url}</td>
                        })}
                  </tr>
                })
              } 

          </tbody>
        </table>
     </div>
    )
  }
}