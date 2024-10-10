import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { getNews } from '../../services/news';
import { News } from '../../types/news';

interface NewsPageProps {
    params: { id: string };
}

export default async function NewsPage({ params }: NewsPageProps) {
    const news = await getNews();
    const selectedNews = news.find((item: News) => item.id === parseInt(params.id));

    if (!selectedNews) {
        return (
            <div className="min-h-screen flex flex-col justify-between">
                <Header />
                <main className="container mx-auto py-8 px-4">
                    <h1 className="text-3xl font-bold mb-6">Erro 404, noticia não encontrada</h1>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <main className="container mx-auto py-8 px-4">
                <h1 className="text-3xl font-bold mb-4">{selectedNews.title}</h1>
                <p className="text-gray-600">{selectedNews.date}</p>
                <img src={selectedNews.image} alt={selectedNews.title} className="w-full h-64 object-cover my-6" />
                <p className="text-lg">{selectedNews.content}</p>
                <div className="mt-4">
                    <h2 className="text-2xl font-bold mb-2">Categorias:</h2>
                    {selectedNews.categories.map((category, index) => (
                        <span key={index} className="text-sm bg-gray-200 rounded-full px-3 py-1 mr-2">
                            {category}
                        </span>
                    ))}
                </div>
                <div className="mt-6">
                    <h2 className="text-2xl font-bold mb-4">Comentários:</h2>
                    {selectedNews.comments.map((comment, index) => (
                        <div key={index} className="mb-4">
                            <p className="font-semibold">{comment.name}:</p>
                            <p className="text-gray-600">{comment.text}</p>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
