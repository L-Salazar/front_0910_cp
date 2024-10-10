interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onNext: () => void;
    onPrevious: () => void;
}

export default function Pagination({ currentPage, totalPages, onNext, onPrevious }: PaginationProps) {
    return (
        <div className="flex justify-center mt-8">
            <button
                onClick={onPrevious}
                disabled={currentPage === 1}
                className={`px-4 py-2 mx-1 bg-gray-200 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                Anterior
            </button>
            <button
                onClick={onNext}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 mx-1 bg-gray-200 rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                Próximo
            </button>
        </div>
    );
}
