console.log('JS OK', 'VUE OK', Vue);

// Estrapolo i metodi che mi servono
const { createApp } = Vue;

// Inizializzo l'app Vue
const app = createApp({
  data() {
    return {
      user: {
        name: 'Matteo Lucerni',
        avatar: '_io',
      },
      contacts: [
        {
          id: 1,
          name: 'Michele',
          avatar: '_1',
          visible: true,
          messages: [
            {
              id: 1,
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent',
            },
            {
              id: 2,
              date: '10/01/2020 15:50:00',
              message: 'Ricordati di stendere i panni',
              status: 'sent',
            },
            {
              id: 3,
              date: '10/01/2020 16:15:22',
              message: 'Tutto fatto!',
              status: 'received',
            },
          ],
        },
        {
          id: 2,
          name: 'Fabio',
          avatar: '_2',
          visible: true,
          messages: [
            {
              id: 1,
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent',
            },
            {
              id: 2,
              date: '20/03/2020 16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received',
            },
            {
              id: 3,
              date: '20/03/2020 16:35:00',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent',
            },
          ],
        },
        {
          id: 3,
          name: 'Samuele',
          avatar: '_3',
          visible: true,
          messages: [
            {
              id: 1,
              date: '28/03/2020 10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received',
            },
            {
              id: 2,
              date: '28/03/2020 10:20:10',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent',
            },
            {
              id: 3,
              date: '28/03/2020 16:15:22',
              message: 'Ah scusa!',
              status: 'received',
            },
          ],
        },
        {
          id: 4,
          name: 'Alessandro B.',
          avatar: '_4',
          visible: true,
          messages: [
            {
              id: 1,
              date: '10/01/2020 15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent',
            },
            {
              id: 2,
              date: '10/01/2020 15:50:00',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received',
            },
          ],
        },
        {
          id: 5,
          name: 'Alessandro L.',
          avatar: '_5',
          visible: true,
          messages: [
            {
              id: 1,
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent',
            },
            {
              id: 2,
              date: '10/01/2020 15:50:00',
              message: 'Va bene, stasera la sento',
              status: 'received',
            },
          ],
        },
        {
          id: 6,
          name: 'Claudia',
          avatar: '_6',
          visible: true,
          messages: [
            {
              id: 1,
              date: '10/01/2020 15:30:55',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent',
            },
            {
              id: 2,
              date: '10/01/2020 15:50:00',
              message: 'Non ancora',
              status: 'received',
            },
            {
              id: 3,
              date: '10/01/2020 15:51:00',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent',
            },
          ],
        },
        {
          id: 7,
          name: 'Federico',
          avatar: '_7',
          visible: true,
          messages: [
            {
              id: 1,
              date: '10/01/2020 15:30:55',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent',
            },
            {
              id: 2,
              date: '10/01/2020 15:50:00',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received',
            },
          ],
        },
        {
          id: 8,
          name: 'Davide',
          avatar: '_8',
          visible: true,
          messages: [
            {
              id: 1,
              date: '10/01/2020 15:30:55',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received',
            },
            {
              id: 2,
              date: '10/01/2020 15:50:00',
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: 'sent',
            },
            {
              id: 3,
              date: '10/01/2020 15:51:00',
              message: 'OK!!',
              status: 'received',
            },
          ],
        },
      ],
      currentChat: {
        name: '',
        avatar: '',
        messages: [],
        infoVisible: false,
      },
      newMessage: '',
      userFilter: '',
      randomMessages: [
        'Sì, assolutamente.',
        'No, mi dispiace.',
        'Forse, dipende dalle circostanze.',
        'Non ne sono sicuro al momento.',
        'È possibile, ma non posso confermarlo con certezza.',
        'Assolutamente no.',
        'Certo, senza dubbio.',
        'Potrebbe essere, ma è difficile dirlo.',
        'Nessuna idea.',
        'Sì, ma con alcune restrizioni.',
      ],
      infoMessage: {
        id: 0,
        name: '',
        date: '',
        message: '',
        status: '',
      },
      isEmojiMenu: false,
      emotes: [
        '😀',
        '😁',
        '😂',
        '🤣',
        '😃',
        '😄',
        '😅',
        '😆',
        '😉',
        '😊',
        '😋',
        '😎',
        '😍',
        '😘',
        '😗',
        '😙',
        '😚',
        '🙂',
        '🤗',
        '🤩',
        '🤔',
        '🤨',
        '😐',
        '😑',
        '😶',
        '🙄',
        '😏',
        '😣',
        '😥',
        '😮',
        '🤐',
        '😯',
        '😪',
        '😫',
        '😴',
        '😌',
        '😛',
        '😜',
        '😝',
        '🤤',
        '😒',
        '😓',
        '😔',
        '😕',
        '🙃',
        '🤑',
        '😲',
        '☹️',
        '🙁',
        '😖',
        '😞',
        '😟',
        '😤',
        '😢',
        '😭',
      ],
      spokenText: '',
      listening: false,
      isChatShown: false,
    };
  },
  computed: {
    nowDate() {
      // prendo la data di adesso nel formato scelto
      const now = new Date();

      const nowDate = `${now.getDate()}/${
        now.getMonth() + 1
      }/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

      return nowDate;
    },
    highestId() {
      //prendo l'id più alto dalla lista dei messaggi correnti
      const arr = this.currentChat.messages;

      const highestId = arr.reduce((acc, mess) => {
        if (mess.id > acc) return mess.id;
      }, 0);

      return highestId;
    },
    filteredContacts() {
      // filtro di ricerca
      const arr = this.contacts;
      const userFilter = this.userFilter.toLowerCase();

      const filteredContacts = arr.filter(contact => {
        const name = contact.name.toLowerCase();
        if (name.includes(userFilter)) {
          return contact;
        }
      });

      return filteredContacts;
    },
  },
  methods: {
    changeChat(i) {
      this.isChatShown = true;
      // sovrascrivo gli elementi in pagina con quelli scelti dall'utente
      this.currentChat.name = this.contacts[i].name;
      this.currentChat.avatar = this.contacts[i].avatar;
      this.currentChat.messages = this.contacts[i].messages;

      this.currentChat.infoVisible = false;
    },
    addMessage() {
      if (!this.newMessage) return;

      const arr = this.currentChat.messages;

      // prendo l'id più alto
      let highestId = this.highestId;

      // salvo la data
      const messageDate = this.nowDate;

      // aggiungo il messaggio alla lista di messaggi
      arr.push({
        id: ++highestId,
        date: messageDate,
        message: this.newMessage,
        status: 'sent',
      });

      // resetto l'input
      this.newMessage = this.spokenText = '';

      // prendo un messaggio random
      const randomNumber = this.randomNumber(9, 0);
      console.log(randomNumber);

      // risposta automatica
      setTimeout(() => {
        arr.push({
          id: ++highestId,
          date: messageDate,
          message: this.randomMessages[randomNumber],
          status: 'received',
        });
      }, 2000);
    },
    deleteMessage(message) {
      let arr = this.currentChat.messages;
      this.currentChat.messages = arr.filter(mess => mess.id !== message.id);
    },
    randomNumber(max, min) {
      return Math.floor(Math.random() * (max + 1 - min)) + min;
    },
    getMessageInfo(mess) {
      this.infoMessage.id = mess.id;
      this.infoMessage.name = this.currentChat.name;
      this.infoMessage.date = mess.date;
      this.infoMessage.message = mess.message;
      this.infoMessage.status = mess.status;

      this.currentChat.infoVisible = true;
    },
    startListening() {
      // riconoscimento vocale
      if ('webkitSpeechRecognition' in window) {
        // flag di registrazione
        this.listening = true;
        const recognition = new webkitSpeechRecognition();
        // lingua di registrazione
        recognition.lang = 'it-IT';
        recognition.continuous = false;

        // trascrizione in testo
        recognition.onresult = event => {
          const transcript = event.results[0][0].transcript;
          this.spokenText = transcript;
        };

        recognition.start();

        // reset dopo 5 secondi
        setTimeout(() => {
          this.listening = false;
        }, 5000);
      } else {
        // se non disponibile
        alert('Errore: riconoscimento vocale non disponibile');
      }
    },
    deleteChat() {
      for (contact of this.filteredContacts) {
        if (this.currentChat.name == contact.name) {
          contact.visible = false;
        }
      }
      this.isChatShown = false;
    },
  },
});

// La monto nell'html
app.mount('#root');
