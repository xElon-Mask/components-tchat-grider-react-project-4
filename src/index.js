import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className='ui container comments'>
            <CommentDetail author="Sam" timeAgo="Today at 4:45PM" authorText="Super la brocante mon cousin !" avatar={faker.image.avatar()}/>
            <CommentDetail author="Alex" timeAgo="Today at 2:00AM" authorText="Est-ce que c'est toi John Wayne, ou est-ce que c'est moi ?" avatar={faker.image.avatar()}/>
            <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM" authorText="HADRIIIENNNE !" avatar={faker.image.avatar()}/>
        </div>
    );
};


ReactDOM.render(<App />, document.querySelector('#root'));