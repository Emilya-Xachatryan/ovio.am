import { create } from "zustand";

const useBookmarkStore = create((set) => ({
    bookmarkNews: [],
    bookmarkSuggestions: [],
    bookmarkOvio: [],

    addBookmark: (item, category) => set((state) => {
        const exists = category === 'news'
            ? state.bookmarkNews.some(bookmark => bookmark.id === item.id)
            : category == "suggestions" ?
            state.bookmarkSuggestions.some(bookmark => bookmark.id === item.id) 
            : state.bookmarkOvio.some(bookmark => bookmark.number == item.number)

        if (exists) {
            if (category === 'news') {
                return { bookmarkNews: state.bookmarkNews.filter(bookmark => bookmark.id !== item.id) };
            } else if (category == "suggestions") {
                return { bookmarkSuggestions: state.bookmarkSuggestions.filter(bookmark => bookmark.id !== item.id) };
            } else {
                return { bookmarkOvio: state.bookmarkOvio.filter(bookmark => bookmark.number !== item.number) };
            }
        }

        if (category === 'news') {
            return { bookmarkNews: [...state.bookmarkNews, item] };
        } else if (category === "suggestions") {
            return { bookmarkSuggestions: [...state.bookmarkSuggestions, item] };
        }else {
            return { bookmarkOvio: [...state.bookmarkOvio, item] };
        }
    }),

    removeBookmark: (item, category) => set((state) => {
        if (category === 'news') {
            return { bookmarkNews: state.bookmarkNews.filter(bookmark => bookmark.id !== item.id) };
        } else if (category === "suggestions") {
            return { bookmarkSuggestions: state.bookmarkSuggestions.filter(bookmark => bookmark.id !== item.id) };
        } else {
            return { bookmarkOvio: state.bookmarkOvio.filter(bookmark => bookmark.number !== item.number) };
        }
    }),

    clearBookmarks: () => set({ bookmarkNews: [], bookmarkSuggestions: [], bookmarkOvio: [] }),
}));

export default useBookmarkStore;
