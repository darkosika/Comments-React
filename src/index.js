import React from 'react';
import ReactDom from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
const App=()=>{
return(
    <div className="ui container comments">
    <ApprovalCard>
    <CommentDetail 
    image={Faker.image.avatar()}
    author="osman"
    date="Today at 5:42PM"
    text="How artistic!"/>
    </ApprovalCard>
    <ApprovalCard>
    <CommentDetail 
    image={Faker.image.avatar()}
    author="emrah"
    date="Today at 6:42PM"
    text="What artistic!"/>
    </ApprovalCard>
    <ApprovalCard>
    <CommentDetail 
    image={Faker.image.avatar()}
    author="yasin"
    date="Today at 7:42PM"
    text="Who artistic!"/>
    </ApprovalCard>
    </div>
);
}
ReactDom.render(<App/>,document.querySelector('#root'));