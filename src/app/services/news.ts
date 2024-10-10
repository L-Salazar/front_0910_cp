import { News } from "../types/news";

export const getNews = async (): Promise<News[]> => {
    const news: News[] = [
        {
            id: 1,
            title: 'Exploração Amazônica Ameaça Ecossistemas',
            date: '2024-10-01',
            content: 'O avanço da exploração ilegal ameaça biodiversidade e o futuro das comunidades locais...',
            image: 'https://picsum.photos/seed/news1/400/300',
            categories: ['Meio Ambiente', 'Amazônia'],
            comments: [
                { name: 'João Silva', text: 'Preocupante a situação descrita.' },
                { name: 'Maria Oliveira', text: 'Precisamos de mais fiscalização!' },
            ],
        },
        {
            id: 2,
            title: 'Novas Tecnologias na Educação Brasileira',
            date: '2024-09-28',
            content: 'A implementação de novas tecnologias em escolas públicas está transformando a educação...',
            image: 'https://picsum.photos/seed/news2/400/300',
            categories: ['Educação', 'Tecnologia'],
            comments: [
                { name: 'Carlos Souza', text: 'Muito bom ver a inovação chegando às escolas.' },
                { name: 'Ana Lima', text: 'Espero que mais escolas tenham acesso a isso.' },
            ],
        },
        {
            id: 3,
            title: 'Cultura Brasileira em Alta no Exterior',
            date: '2024-10-05',
            content: 'O aumento do interesse pela cultura brasileira é evidente em várias partes do mundo...',
            image: 'https://picsum.photos/seed/news3/400/300',
            categories: ['Cultura', 'Mundo'],
            comments: [
                { name: 'Paulo Ricardo', text: 'Orgulho da nossa cultura!' },
            ],
        },
        {
            id: 4,
            title: 'Política Econômica Atinge Novo Marco',
            date: '2024-10-02',
            content: 'O governo anunciou novas medidas que prometem transformar o cenário econômico...',
            image: 'https://picsum.photos/seed/news4/400/300',
            categories: ['Economia', 'Política'],
            comments: [
                { name: 'Roberto Dias', text: 'Esperamos que seja para o bem de todos.' },
            ],
        },
        {
            id: 5,
            title: 'Avanços na Medicina Regenerativa',
            date: '2024-09-30',
            content: 'Pesquisadores brasileiros estão na vanguarda dos avanços em medicina regenerativa...',
            image: 'https://picsum.photos/seed/news5/400/300',
            categories: ['Saúde', 'Ciência'],
            comments: [
                { name: 'Fernanda Costa', text: 'Impressionante o avanço científico.' },
            ],
        },
        {
            id: 6,
            title: 'Turismo no Nordeste Cresce 20%',
            date: '2024-10-08',
            content: 'O setor de turismo no Nordeste brasileiro teve um crescimento recorde nos últimos meses...',
            image: 'https://picsum.photos/seed/news6/400/300',
            categories: ['Turismo', 'Nordeste'],
            comments: [
                { name: 'Lucas Martins', text: 'Uma ótima notícia para a região!' },
            ],
        },
        {
            id: 7,
            title: 'Arte Contemporânea Brasileira Ganha Destaque',
            date: '2024-09-27',
            content: 'Artistas brasileiros ganham destaque em galerias de arte contemporânea ao redor do mundo...',
            image: 'https://picsum.photos/seed/news7/400/300',
            categories: ['Arte', 'Cultura'],
            comments: [
                { name: 'Beatriz Souza', text: 'A cultura brasileira tem um potencial imenso.' },
            ],
        },
        {
            id: 8,
            title: 'Inovações Sustentáveis na Indústria Brasileira',
            date: '2024-10-03',
            content: 'Empresas brasileiras estão investindo em soluções sustentáveis para melhorar seus processos...',
            image: 'https://picsum.photos/seed/news8/400/300',
            categories: ['Sustentabilidade', 'Indústria'],
            comments: [
                { name: 'Thiago Santos', text: 'O futuro está na sustentabilidade!' },
            ],
        },
        {
            id: 9,
            title: 'Mercado de Trabalho em Expansão',
            date: '2024-09-29',
            content: 'Novas oportunidades de emprego surgem no mercado de tecnologia e inovação no Brasil...',
            image: 'https://picsum.photos/seed/news9/400/300',
            categories: ['Trabalho', 'Tecnologia'],
            comments: [
                { name: 'Renata Almeida', text: 'Uma boa notícia para os jovens profissionais.' },
            ],
        },
        {
            id: 10,
            title: 'Alimentação Saudável Ganha Espaço nas Escolas',
            date: '2024-10-07',
            content: 'Escolas brasileiras começam a adotar programas de alimentação saudável para alunos...',
            image: 'https://picsum.photos/seed/news10/400/300',
            categories: ['Saúde', 'Educação'],
            comments: [
                { name: 'Gabriela Ramos', text: 'Iniciativa que vai fazer a diferença no futuro das crianças.' },
            ],
        },
    ];

    return news;
};
