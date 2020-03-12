export default {
    name: 'bookService',
    methods: {
        goToPreviewPage(book) {
            window.open(book.volumeInfo.previewLink, '_blank')
        }
    }

}