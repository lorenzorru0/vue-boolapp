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
                        status: 'sent', 
                        deleteMessage: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        deleteMessage: false
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received',
                        deleteMessage: false
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
                    status: 'sent',
                    deleteMessage: false
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received',
                    deleteMessage: false
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received',
                    deleteMessage: false
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
                    status: 'received',
                    deleteMessage: false
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent',
                    deleteMessage: false
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received',
                    deleteMessage: false
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
                    status: 'sent',
                    deleteMessage: false
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received',
                    deleteMessage: false
                }
                ],
            },
        ],
        currentContact: 0,
        newMessage: "",
        searchString: "",
        testContacts: [],
        randomMessages: [
            "Sì",
            "È così.",
            "Sarebbe bello.",
            "E come?",
            "Giustamente.",
            "Sta bene.",
            "Si può anche convenire.",
            "Da quanto è stato detto almeno, pare così.",
            "Di' pure come.",
            "Sia pure così.",
            "Come no?",
            "Molto bene.",
            "Certamente.",
            "Tutto questo è stato assolutamente chiarito a sufficienza.",
            "Così almeno sembra.",
            "Bene.",
            "Questo non lo sapevo.",
            "È verissimo quel che dici.",
            "Ma è chiaro!",
            "Perfetto.",
            "Infatti è così.",
            "Come dici?",
            "Ma per forza!",
            "Ma certamente!",
            "E perché non dovrei?",
            "Si disse proprio così.",
            "Come potrebbe essere diversamente?",
            "Senza meno.",
            "Eh già!",
            "Dillo pure!",
            "Si trattava proprio di questo.",
            "Non ho capito.",
            "Pare.",
            "Bisogna ammetterlo senza riserva.",
            "Sta proprio così.",
            "È vero.",
            "È assolutamente così.",
            "Questo almeno è verosimile.",
            "Dici bene.",
            "Esattamente.",
            "C'è proprio modo che questo avvenga soprattutto per questa ragione.",
            "Perché no?",
            "Difficilmente, sicuro!",
            "Non potrebbe affatto.",
            "Sicuro!",
            "Veramente no.",
            "E come non ammetterlo?",
            "Tu dici bene: bisogna fare così.",
            "Va chiamata così.",
            "Ebbene?",
            "Giusto.",
            "Come e a quale scopo dici questo?",
            "E perché?",
            "È impossibile.",
            "Assolutamente no.",
            "È assolutamente necessario.",
            "In che senso dici?",
            "È molto chiaro.",
            "Sì, nel modo più assoluto.",
            "Ti seguo.",
            "Pare certamente così.",
            "Lo vedo anche troppo bene.",
            "E che cos'altro potremmo dire?",
            "Anche questo.",
            "Mi pare che questo punto si debba dibattere nei nostri ragionamenti.",
            "È verissimo.",
            "Lo hai detto.",
            "Per quel che mi riguarda non mi sembra affatto che tu sbagli.",
            "Di' pure chiaro quel che vuoi dire.",
            "Lo vedo.",
            "Forse sì.",
            "Eh, sì!",
            "Tu dici il vero.",
            "È molto giusto quello che dici.",
            "È necessario.",
            "Sembra senza dubbio che la questione stia così.",
            "Sarà così.",
            "Tutto questo a me pare che sia assurdo!",
            "Certamente sì.",
            "Verissimo.",
            "Senza dubbio.",
            "Assolutamente.",
            "È proprio così.",
            "È come dici.",
            "Tu dici cosa autentica e vera.",
            "Questo anch'io mi sento capace di affermarlo.",
            "Sì, certamente.",
            "Forse.",
            "È esatto.",
            "Ma questo è impossibile.",
            "Pressappoco.",
            "Ma certo.",
            "Senza remora alcuna, assolutamente.",
            "Nel modo più evidente.",
            "Su per giù è così.",
            "Dici il giusto.",
            "È giustissimo.",
            "A questo punto non ci sono arrivato.",
            "È verosimile.",
            "Tutto il contrario."
        ]
    },
    mounted() {
        this.copyContacts()
    },
    methods: {
        randomNumber: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
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
        getRandomMessage: function() {
            return this.randomMessages[this.randomNumber(0, this.randomMessages.length - 1)]
        },
        addMessage: function() {
            let currentDateTime = this.getDate();
            this.contacts[this.currentContact].messages.push({
                date: currentDateTime,
                message: this.newMessage,
                status: 'sent',
                deleteMessage: false
            });
            this.newMessage = "";
            setTimeout(() => { 
                let currentDateTime = this.getDate();
                this.contacts[this.currentContact].messages.push({
                    date: currentDateTime,
                    message: this.getRandomMessage(),
                    status: 'received',
                    deleteMessage: false
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

        },
        toggleDeleteMessage: function(messageIndex) {
            this.contacts[this.currentContact].messages[messageIndex].deleteMessage = !this.contacts[this.currentContact].messages[messageIndex].deleteMessage;
        }
    }
});