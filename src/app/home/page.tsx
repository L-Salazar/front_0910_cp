'use client';

import { useEffect, useState } from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import { getNews } from '../services/news';
import { News } from '../types/news';

export default function Home() {
    const [news, setNews] = useState<News[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const newsPerPage = 3; // Número de notícias por página

    // Função para buscar notícias
    useEffect(() => {
        const fetchNews = async () => {
            const fetchedNews = await getNews();
            setNews(fetchedNews);
        };

        fetchNews();
    }, []);

    // Cálculo de quais notícias devem aparecer na página atual
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

    const totalPages = Math.ceil(news.length / newsPerPage);

    // Funções de navegação
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <main className="container mx-auto py-8 px-4">
                <h1 className="text-3xl font-bold mb-6">Últimas Notícias</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentNews.map((item) => (
                        <Card key={item.id} news={item} />
                    ))}
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onNext={handleNextPage}
                    onPrevious={handlePreviousPage}
                />
            </main>
            <Footer />
        </div>
    );
}
