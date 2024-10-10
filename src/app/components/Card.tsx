import Link from 'next/link';
import { News } from '../types/news';

interface CardProps {
    news: News;
}

export default function Card({ news }: CardProps) {
    const limitedContent = news.content.length > 50 ? news.content.substring(0, 50) + '...' : news.content;

    return (
        <div className="bg-white shadow-lg rounded-lg p-4">
            <img src={news.image} alt={news.title} className="w-full h-48 object-cover rounded-t-lg" />
            <h2 className="text-xl font-semibold mt-4">
                <Link href={`/home/${news.id}`} className="hover:text-blue-500">
                    {news.title}
                </Link>
            </h2>
            <p className="text-gray-500">{limitedContent}</p>
            <p className="text-sm text-gray-400">{news.date}</p>
            <div className="mt-2">
                {news.categories.map((category, index) => (
                    <span key={index} className="text-sm bg-gray-200 rounded-full px-3 py-1 mr-2">
                        {category}
                    </span>
                ))}
            </div>
        </div>
    );
}
