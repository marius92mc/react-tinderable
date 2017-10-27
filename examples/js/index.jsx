/*global require*/
var React = require('react'),
    ReactDOM = require('react-dom'),
    Tinderable = require('../../lib/tinderable.js');

var cardsData = [
    {
        title: 'blabla1',
        text: 'hello1',
        image: 'portrait-1.jpg',
        id: '1'
    },
    {
        title: 'blabla2',
        text: 'hello2',
        image: 'portrait-2.jpg',
        id: '2'
    },
    {
        title: 'blabla3',
        text: 'text3',
        image: 'portrait-3.jpg',
        id: '3'
    },
    {
        title: 'blabla4',
        text: 'text4',
        image: 'portrait-4.jpg',
        id: '4'
    }
];

ReactDOM.render(
    <Tinderable initialCardsData={cardsData} />,
    document.getElementById('master-root')
);
