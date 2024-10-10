export interface Comment {
    name: string;
    text: string;
}

export interface News {
    id: number;
    title: string;
    date: string;
    content: string;  // Conteúdo do artigo
    image: string;  // URL da imagem
    categories: string[];  // Lista de categorias
    comments: Comment[];  // Lista de comentários com nome e texto
}
