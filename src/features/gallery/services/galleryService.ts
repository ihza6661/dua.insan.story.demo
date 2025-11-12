export interface GalleryItem {
  id: number;
  title: string;
  description: string | null;
  file_url: string;
}

interface PaginatedResponse<T> {
  data: T[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    path: string;
    per_page: number;
    to: number;
    total: number;
  };
}

export const fetchGalleryItems = async ({ pageParam = '/customer/gallery-items' }: { pageParam?: string }): Promise<PaginatedResponse<GalleryItem>> => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                data: [
                    { id: 1, title: 'Gallery 1', description: 'Description 1', file_url: '/hero/1.jpg' },
                    { id: 2, title: 'Gallery 2', description: 'Description 2', file_url: '/hero/2.jpg' },
                    { id: 3, title: 'Gallery 3', description: 'Description 3', file_url: '/hero/3.jpg' },
                    { id: 4, title: 'Gallery 4', description: 'Description 4', file_url: '/hero/4.jpg' },
                    { id: 5, title: 'Gallery 5', description: 'Description 5', file_url: '/hero/5.jpg' },
                    { id: 6, title: 'Gallery 6', description: 'Description 6', file_url: '/hero/6.jpg' },
                    { id: 7, title: 'Gallery 7', description: 'Description 7', file_url: '/hero/7.jpg' },
                    { id: 8, title: 'Gallery 8', description: 'Description 8', file_url: '/hero/8.jpg' },
                ],
                links: { first: '', last: '', prev: null, next: null },
                meta: { current_page: 1, from: 1, last_page: 1, path: '', per_page: 8, to: 8, total: 8 }
            });
        }, 500);
    });
};