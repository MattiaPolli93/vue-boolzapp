"use strict";

// Main Vue.js instance
const app = new Vue(
  {
    el: "#app",
    data: {
        // User info
        user: {
            name: "Mattia 😎",
            avatar: "img/avatar_2.jpg"
        },
        // Contacts info
        contacts: [
            {
                name: "Deborah",
                avatar: "img/avatar_io.jpg",
                lastAccess: "today at 17:15",
                messages: [
                    {
                        date: "10/04/2020 15:30:55",
                        message: "Did you take the dog out? 🐕",
                        status: "sent"
                    },
                    {
                        date: "10/04/2020 15:50:00",
                        message: "Remember to feed it!",
                        status: "sent"
                    },
                    {
                        date: "10/04/2020 16:15:22",
                        message: "All done! 👌",
                        status: "received"
                    },
                    {
                        date: "10/04/2020 16:30:55",
                        message: "Perfect, next time leave it to me, I'll take the dog outside 👍",
                        status: "sent"
                    }
                ]
            },
            {
                name: "Michael",
                avatar: "img/avatar_1.jpg",
                lastAccess: "today at 18:30",
                messages: [
                    {
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
                        message: "I'd like to but I must go to the grocery store first",
                        status: "sent"
                    }
                ]
            },
            {
                name: "Erik",
                avatar: "img/avatar_3.jpg",
                lastAccess: "today at 19:35",
                messages: [
                    {
                        date: "28/03/2020 10:10:40",
                        message: "Marianna is going to the countryside",
                        status: "received"
                    },
                    {
                        date: "28/03/2020 10:20:10",
                        message: "U sure it's not the wrong chat?",
                        status: "sent"
                    },
                    {
                        date: "28/03/2020 13:15:22",
                        message: "Ah sorry!",
                        status: "received"
                    },
                    {
                        date: "28/03/2020 15:10:40",
                        message: "No problem hahaha",
                        status: "sent"
                    }
                ]
            },
            {
                name: "Gianna",
                avatar: "img/avatar_6.jpg",
                lastAccess: "today at 19:45",
                messages: [
                    {
                        date: "10/01/2020 18:30:55",
                        message: "Did you know that a new pizzeria just opened? 🍕",
                        status: "sent"
                    },
                    {
                        date: "10/01/2020 18:55:00",
                        message: "Yes, but I'd rather go to the cinema 📽️",
                        status: "received"
                    },
                    {
                        date: "10/01/2020 19:30:55",
                        message: "Ah ok, as you prefer then",
                        status: "sent"
                    }
                ]
            },
            {    
                name: "Lawrence",
                avatar: "img/avatar_5.jpg",
                lastAccess: "today at 13:37",
                messages: [
                    {
                        date: "10/01/2020 11:30:55",
                        message: "Hey dude can I come over?",
                        status: "sent"
                    },
                    {
                        date: "10/01/2020 12:50:00",
                        message: "Sure thing!",
                        status: "received"
                    },
                    {
                        date: "10/01/2020 13:30:55",
                        message: "😄",
                        status: "sent"
                    }
                ]
            },
            {    
                name: "James",
                avatar: "img/avatar_7.jpg",
                lastAccess: "today at 16:54",
                messages: [
                    {
                        date: "10/01/2020 15:30:55",
                        message: "Heard the news mate?",
                        status: "sent"
                    },
                    {
                        date: "10/01/2020 15:50:00",
                        message: "Yes... I am speechless",
                        status: "received"
                    },
                    {
                        date: "10/01/2020 16:30:55",
                        message: "I know... Something impossible to describe with words...",
                        status: "sent"
                    },
                    {
                        date: "10/01/2020 16:40:00",
                        message: "😓😓😓",
                        status: "received"
                    },
                    {
                        date: "10/01/2020 16:50:55",
                        message: "Utterly unbelievable",
                        status: "sent"
                    }
                ]
            },
            {    
                name: "Samuel",
                avatar: "img/avatar_4.jpg",
                lastAccess: "today at 19:55",
                messages: [
                    {
                        date: "10/01/2020 15:30:55",
                        message: "Oh my I can't believe it!",
                        status: "sent"
                    },
                    {
                        date: "10/01/2020 15:50:00",
                        message: "Wait what happened? 😧",
                        status: "received"
                    },
                    {
                        date: "10/01/2020 19:50:00",
                        message: "Hello? U there??? 🤷‍♂️",
                        status: "received"
                    },
                    {
                        date: "10/01/2020 19:55:00",
                        message: "Yeah sorry, here I am... nothing in the end... How are things going with you?",
                        status: "sent"
                    }
                ]
            },
            {    
                name: "Jack",
                avatar: "img/avatar_8.jpg",
                lastAccess: "today at 16:00",
                messages: [
                    {
                        date: "10/01/2020 15:10:55",
                        message: "Thank you for your help bro!",
                        status: "sent"
                    },
                    {
                        date: "10/01/2020 15:20:00",
                        message: "Whenever you need me, I'll be there for you dude! 💪",
                        status: "received"
                    },
                    {
                        date: "10/01/2020 15:30:55",
                        message: "Really, thank you again!!!",
                        status: "sent"
                    }
                ]
            }
        ],
        contactIndex: 0,
        messageText: "",
        filteredNames: ""
    },
    computed: {
        // Filtering contacts names when typing input in the searchbar
        filterNames() {
            return this.contacts.filter((contact) => {
                return contact.name.toUpperCase().match(this.filteredNames.toUpperCase());
            });
        }
    },
    methods: {
        // Sending chat-messages 
        sendMessage() {
            if (this.messageText !== "") {
                this.contacts[this.contactIndex].messages.push({
                    date: dayjs().format("DD/MM/YY HH:MM:ss"),
                    message: this.messageText,
                    status: 'sent'
                });
                
                // Clearing input field after sending message
                this.messageText = "";

                // Timing function for the auto-reply message
                setTimeout(this.autoReply, 1000);
            }
        },
        
        // Sending automatic reply message
        autoReply() {
            this.contacts[this.contactIndex].messages.push({
                date: dayjs().format("DD/MM/YY HH:MM:ss"),
                message: "Sorry can't talk right now, I'll text you later!",
                status: "received"
            });
        },

        // Clearing the input field before sending
        resetInput() {
            this.messageText = "";
        }
    }
  }
);