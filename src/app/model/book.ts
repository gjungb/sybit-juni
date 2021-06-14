/**
 * Ein Buch
 */
export interface Book {
    /**
     * Die ISBN @link 
     */
    isbn: string;
    /**
     * Der Titel
     */
    title: string;
    /**
     * Die Person, wo das Buch geschrieben hat
     */
    author: string;
    /**
     * Eine kurze Beschreibung
     */
    abstract?: string;
}
