const App = {
    data() {
        return {
            placeholderString: 'Введите название заметки',
            counter: 0,
            title: 'Список заметок',
            inputValue: '',
            notes: []
        }
    },
    methods: {
        // inputChangeHandler(e) {
        //     this.inputValue = e.target.value
        // },
        addNewNote(e) {
            e.preventDefault()
            if (!this.inputValue) return false
            this.notes.push(this.inputValue)
            this.inputValue = ''
        },
        removeNote(idx) {
            this.notes.splice(idx,1)
        },
    },
    computed: {
        doubleCountComputed () {
            return this.notes.length*2
        }
    },
    watch: {
        inputValue(inputValue) {
            if(inputValue.length > 100 )
                this.inputValue = ''
        }
    }
}

Vue.createApp(App).mount('#app')

