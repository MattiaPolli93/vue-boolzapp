"use strict";

// Main Vue.js instance
const app = new Vue(
  {
    el: "#app",
    data: {        
        contacts: [
            {
                name: "Deborah",
                avatar: "img/avatar_io.jpg",
                visible: true,
                messages: [{
                    date: "10/01/2020 15:30:55",
                    message: "Did you take the dog out?",
                    status: "sent"
                },
                    {
                        date: "10/01/2020 15:50:00",
                        message: "Remember to feed it!",
                        status: "sent"
                    },
                    {
                        date: "10/01/2020 16:15:22",
                        message: "All done!",
                        status: "received"
                    }
                ],
            },
            {
                name: "Michael",
                avatar: "img/avatar_1.jpg",
                visible: true,
                messages: [{
                    date: "20/03/2020 16:30:00",
                    message: "Hello how are you?",
                    status: "sent"
                },
                    {
                        date: "20/03/2020 16:30:55",
                        message: "Fine thanks! See you tonight?",
                        status: "received"
                    },
                    {
                        date: "20/03/2020 16:35:00",
                        message: "I'd like to but I must go to the grocery store",
                        status: "received"
                    }
                ],
            },
            {
                name: "Erik",
                avatar: "img/avatar_3.jpg",
                visible: true,
                messages: [{
                    date: "28/03/2020 10:10:40",
                    message: "Marianna is going to the countryside",
                    status: "received"
                },
                    {
                        date: "28/03/2020 10:20:10",
                        message: "U sure it's not a wrong chat?",
                        status: "sent"
                    },
                    {
                        date: "28/03/2020 16:15:22",
                        message: "Ah sorry!",
                        status: "received"
                    }
                ],
            },
            {
                name: "Gianna",
                avatar: "img/avatar_6.jpg",
                visible: true,
                messages: [{
                    date: "10/01/2020 15:30:55",
                    message: "Did you know that a new pizzeria just opened?",
                    status: "sent"
                },
                    {
                        date: "10/01/2020 15:50:00",
                        message: "Yes, but I'd rather go to the cinema",
                        status: "received"
                    }
                ],
            },
            {    
                name: "Lawrence",
                avatar: "img/avatar_5.jpg",
                visible: true,
                messages: [{
                    date: "10/01/2020 15:30:55",
                    message: "Did you know that a new pizzeria just opened?",
                    status: "sent"
                },
                    {
                        date: "10/01/2020 15:50:00",
                        message: "Yes, but I'd rather go to the cinema",
                        status: "received"
                    }
                ],
            },
            {    
                name: "James",
                avatar: "img/avatar_7.jpg",
                visible: true,
                messages: [{
                    date: "10/01/2020 15:30:55",
                    message: "Did you know that a new pizzeria just opened?",
                    status: "sent"
                },
                    {
                        date: "10/01/2020 15:50:00",
                        message: "Yes, but I'd rather go to the cinema",
                        status: "received"
                    }
                ],
            },
            {    
                name: "Samuel",
                avatar: "img/avatar_4.jpg",
                visible: true,
                messages: [{
                    date: "10/01/2020 15:30:55",
                    message: "Did you know that a new pizzeria just opened?",
                    status: "sent"
                },
                    {
                        date: "10/01/2020 15:50:00",
                        message: "Yes, but I'd rather go to the cinema",
                        status: "received"
                    }
                ],
            },
            {    
                name: "Jack",
                avatar: "img/avatar_8.jpg",
                visible: true,
                messages: [{
                    date: "10/01/2020 15:30:55",
                    message: "Did you know that a new pizzeria just opened?",
                    status: "sent"
                },
                    {
                        date: "10/01/2020 15:50:00",
                        message: "Yes, but I'd rather go to the cinema",
                        status: "received"
                    }
                ],
            },
        ],
    },
    methods: {

    }
  }
);