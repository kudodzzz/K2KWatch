

//conan movie
const conanMovies = [
    { title: "Dư Ảnh Của Độc Nhãn", movie: "28", year: "2025", img: "https://upload.wikimedia.org/wikipedia/vi/3/3c/Conan_2025.jpg", badge: "MỚI" },
    { title: "Ngôi Sao 5 Cánh 1 Triệu Đô", movie: "27", year: "2024", img: "https://upload.wikimedia.org/wikipedia/vi/9/9d/Conan_Movie_27.jpg" },
    { title: "Tàu Ngầm Sắt Màu Đen", movie: "26", year: "2023", img: "https://upload.wikimedia.org/wikipedia/vi/5/58/Conan_-_The_Black_Iron_Submarine_-_Vietnam_poster.jpg" },
    { title: "Nàng Dâu Halloween", movie: "25", year: "2022", img: "https://kilala.vn/data/upload/article/8821/Conan-Movie%202022.jpg" },
    { title: "Viên Đạn Đỏ", movie: "24", year: "2021", img: "https://upload.wikimedia.org/wikipedia/vi/d/d9/ConanMovie24.jpg" },
    { title: "Cú Đấm Sapphire Xanh", movie: "23", year: "2019", img: "https://upload.wikimedia.org/wikipedia/vi/2/21/Detective-conan-movie-2019-poster.jpg" },
    { title: "Kẻ Hành Pháp Zero", movie: "22", year: "2018", img: "https://upload.wikimedia.org/wikipedia/vi/e/e1/Poster_ConanMovie22_2018-01-17.jpg" },
    { title: "Bản Tình Ca Màu Đỏ Thẫm", movie: "21", year: "2017", img: "https://upload.wikimedia.org/wikipedia/vi/thumb/f/f5/Detective_Conan_movie_2017.jpg/339px-Detective_Conan_movie_2017.jpg" },
    { title: "Cơn Ác Mộng Đen Tối", movie: "20", year: "2016", img: "https://upload.wikimedia.org/wikipedia/vi/0/00/%C3%81p_ph%C3%ADch_phim_Th%C3%A1m_t%E1%BB%AD_l%E1%BB%ABng_danh_Conan_th%E1%BB%A9_20.jpg" },
    { title: "Hoa Hướng Dương Rực Lửa", movie: "19", year: "2015", img: "https://upload.wikimedia.org/wikipedia/vi/4/4a/%C3%81p_ph%C3%ADch_phim_Th%C3%A1m_t%E1%BB%AD_l%E1%BB%ABng_danh_Conan-_Hoa_h%C6%B0%E1%BB%9Bng_d%C6%B0%C6%A1ng_r%E1%BB%B1c_l%E1%BB%ADa_thu%E1%BB%99c_k%C3%AAnh_truy%E1%BB%81n_h%C3%ACnh_HTV3.jpg" },
    { title: "Sát Thủ Bắn Tỉa Không Tưởng", movie: "18", year: "2014", img: "https://upload.wikimedia.org/wikipedia/vi/c/c1/Detective_Conan_2014.jpg" },
    { title: "Con Mắt Bí Ẩn", movie: "17", year: "2013", img: "https://upload.wikimedia.org/wikipedia/vi/thumb/8/8a/Poster_Conan_movie_17.jpg/339px-Poster_Conan_movie_17.jpg" },
    { title: "Tiền Đạo Thứ 11", movie: "16", year: "2012", img: "https://upload.wikimedia.org/wikipedia/vi/thumb/8/8c/Detective_Conan_Movie_16_poster.jpg/337px-Detective_Conan_Movie_16_poster.jpg" },
    { title: "15 Phút Tĩnh Lặng", movie: "15", year: "2011", img: "https://upload.wikimedia.org/wikipedia/vi/3/30/Poster_Conan_movie_15.jpg" },
    { title: "Con Tàu Biến Mất", movie: "14", year: "2010", img: "https://upload.wikimedia.org/wikipedia/vi/1/1d/Case_Closed_The_Lost_Ship_in_the_Sky_Poster.jpg" },
    { title: "Truy Lùng Tổ Chức Áo Đen", movie: "13", year: "2009", img: "https://upload.wikimedia.org/wikipedia/vi/thumb/9/9b/DetectiveConanMovie13.jpg/320px-DetectiveConanMovie13.jpg" },
    { title: "Tận Cùng Sự Sợ Hãi", movie: "12", year: "2008", img: "https://upload.wikimedia.org/wikipedia/vi/e/ec/DetectiveConanMovie12.jpg" },
    { title: "Kho Báu Đáy Đại Dương", movie: "11", year: "2007", img: "https://upload.wikimedia.org/wikipedia/vi/d/d0/DetectiveConanMovie11.jpg" },
    { title: "Lễ Cầu Hôn Thám Tử", movie: "10", year: "2006", img: "https://upload.wikimedia.org/wikipedia/vi/1/16/DetectiveConanMovie10.jpg" },
    { title: "Âm Mưu Trên Biển", movie: "9", year: "2005", img: "https://upload.wikimedia.org/wikipedia/vi/b/b8/DetectiveConanMovie9.jpg" },
    { title: "Nhà Ảo Thuật Bạc", movie: "8", year: "2004", img: "https://upload.wikimedia.org/wikipedia/vi/2/2e/DetectiveConanMovie8.jpg" },
    { title: "Mê Cung Thành Phố Cổ", movie: "7", year: "2003", img: "https://upload.wikimedia.org/wikipedia/vi/c/c8/DetectiveConanMovie7.jpg" },
    { title: "Bóng Ma Đường Baker", movie: "6", year: "2002", img: "https://upload.wikimedia.org/wikipedia/vi/d/d3/Case_Closed_Movie_5.jpg" },
    { title: "Những Giây Cuối Cùng", movie: "5", year: "2001", img: "https://upload.wikimedia.org/wikipedia/vi/4/46/DetectiveConanMovie5.jpg" },
    { title: "Thủ Phạm Trong Mắt", movie: "4", year: "2000", img: "https://upload.wikimedia.org/wikipedia/vi/d/df/Case_closed_movie_4.jpg" },
    { title: "Ảo Thuật Gia Cuối Cùng", movie: "3", year: "1999", img: "https://upload.wikimedia.org/wikipedia/vi/6/69/Case_Closed_movie_3.jpg" },
    { title: "Mục Tiêu Thứ 14", movie: "2", year: "1998", img: "https://upload.wikimedia.org/wikipedia/vi/8/8d/Case_Closed_14_target_%28movie%29.jpg" },
    { title: "Quả Bom Chọc Trời", movie: "1", year: "1997", img: "https://upload.wikimedia.org/wikipedia/vi/3/39/Caseclosed_the_time_bombed_%28movie_1%29.jpg" }
];

//hhtq
const hhMovies = [
    { title: "Thanh Xuân Này Vẫn Là Em", time: "15:44", img: "https://i.ytimg.com/vi/SrFpZcjnD50/hqdefault.jpg", link: "hhdktq/thanh-xuan-nay-van-la-em/tap-full" },
    { title: "Quay Lại Để Yêu Em", time: "24:52", img: "https://img.youtube.com/vi/LJ6rYpID0JY/hqdefault.jpg", link: "hhdktq/quay-lai-de-yeu-em/tap-full" },
    { title: "Tình Yêu Là Nỗi Đau", time: "30:01", img: "https://img.youtube.com/vi/zuZfaCr0HQ8/0.jpg", link: "hhdktq/tinh-yeu-la-noi-dau/tap-full" },
    { title: "Tình Yêu Từ Đây Sao", time: "23:16", img: "https://i.ytimg.com/vi/E2eLCX-tf10/hqdefault.jpg", link: "hhdktq/tinh-yeu-tu-day-sao/tap-full" },
    { title: "Unknown Playlist", time: "20:21", img: "https://i.postimg.cc/SQ5tbtdt/A56BE9DD-25D7-49EA-B85C-95780DD749FA.png", link: "hhdktq/unknown-playlist/1cb" },
    { title: "Khi Tình Yêu Cất Lời Dối Trá", time: "14:04", img: "https://img.youtube.com/vi/2wpESYj2X-w/hqdefault.jpg", link: "hhdktq/khi-tinh-yeu-cat-loi-doi-tra/tap-full" }
];


//print log to debug

console.warn("Đây là list phim để debug khẩn cấp lúc cần, mà tôi khuyên bạn không nên vào tab này.")
console.log(conanMovies)
console.log(hhMovies)

//dom
document.addEventListener('DOMContentLoaded', () => {
    const conanList = document.getElementById('conan-list');
    conanMovies.forEach(item => {
        const movieCard = `
            <a href="conan/conan-movie-${item.movie}" class="card-custom">
                <div class="relative aspect-[2/3] overflow-hidden rounded-t-lg">
                    <img src="${item.img}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="${item.title}">
                    ${item.badge ? `<div class="absolute top-2 right-2 bg-cyan-500 text-[9px] font-bold px-2 py-1 rounded shadow-lg text-white">${item.badge}</div>` : ''}
                </div>
                <div class="p-3 bg-slate-900/50 rounded-b-lg">
                    <p class="text-cyan-400 font-bold text-xs md:text-sm line-clamp-1">${item.title}</p>
                    <p class="text-gray-500 text-[10px] mono">Movie ${item.movie} (${item.year})</p>
                </div>
            </a>`;
        conanList.innerHTML += movieCard;
    });

    const hhList = document.getElementById('hh-list');
    hhMovies.forEach(item => {
        const hhCard = `
            <a href="${item.link}" class="card-custom group">
                <div class="relative aspect-video overflow-hidden rounded-t-lg">
                    <img src="${item.img}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="${item.title}">
                    <div class="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-[10px] mono font-bold border border-white/10 text-white">${item.time}</div>
                </div>
                <div class="p-4 md:p-5 bg-slate-900/50 rounded-b-lg">
                    <p class="text-cyan-400 font-extrabold text-base md:text-lg line-clamp-1">${item.title}</p>
                    <div class="flex items-center gap-2 mt-2 text-gray-400 text-[10px] uppercase font-bold tracking-tighter">
                        <span class="bg-white/5 px-2 py-0.5 rounded border border-white/5"><i class="fa-solid fa-closed-captioning mr-1"></i> Thuyết Minh</span>
                    </div>
                </div>
            </a>`;
        hhList.innerHTML += hhCard;
    });

    const loadingScreen = document.getElementById('loading');
    window.addEventListener('load', () => {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.remove();
            }, 700);
        }, 1500);
    });
});