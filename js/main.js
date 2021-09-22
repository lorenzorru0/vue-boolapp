const app = new Vue ({
    el: "#root",
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ],
            },
        ],
        currentContact: 0,
        newMessage: "",
        searchString: "",
        testContacts: []
    },
    mounted() {
        this.copyContacts()
    },
    methods: {
        copyContacts: function() {
            this.contacts.forEach((contact) => {
                this.testContacts.push(contact);
            });
        },
        changeChat: function(contactsIndex) {
            this.currentContact = contactsIndex;
        },
        getDate: function() {
            let today = new Date();
            let date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            let dateTime = date + ' ' + time;
            return dateTime;
        },
        addMessage: function() {
            let currentDateTime = this.getDate();
            this.contacts[this.currentContact].messages.push({
                date: currentDateTime,
                message: this.newMessage,
                status: 'sent'
            });
            this.newMessage = "";
            setTimeout(() => { 
                let currentDateTime = this.getDate();
                this.contacts[this.currentContact].messages.push({
                    date: currentDateTime,
                    message: 'Ciao!',
                    status: 'received'
                });
            }, 1000);
        },
        searchChat: function() {
            let testSearchString = this.searchString.charAt(0).toLowerCase() + this.searchString.slice(1); 
            let testArray = [];

            this.contacts.forEach((contact) => {
                let testName = contact.name.charAt(0).toLowerCase() + contact.name.slice(1);
                if ( testName.includes(testSearchString) == true ) {
                    testArray.push(contact);
                }
            });

            this.testContacts = testArray;

        }
    }
});