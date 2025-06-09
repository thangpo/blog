const shapes = [
    'rounded-full',
    '',
    'rounded-lg',
    'clip-triangle',
    'clip-hexagon',
    'rounded-md',
];

const skills = [
    { name: 'HTML5', icon: '<i class="fab fa-html5 text-6xl text-orange-600 mb-3"></i>', music: './music/tg1.m4a', bgIcon: '<img src="https://cdn-icons-png.flaticon.com/512/919/919827.png" class="w-72 h-72 opacity-40" alt="HTML5">' },
    { name: 'CSS3', icon: '<i class="fab fa-css3-alt text-6xl text-blue-600 mb-3"></i>', music: './music/tg2.m4a', bgIcon: '<img src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/css3-512.png" class="w-72 h-72 opacity-40" alt="CSS3">' },
    { name: 'JavaScript', icon: '<i class="fab fa-js-square text-6xl text-yellow-400 mb-3"></i>', music: './music/tg3.mp3', bgIcon: '<img src="https://www.clipartmax.com/png/middle/470-4707396_javascript-icon-html-css-js-icons.png" class="w-72 h-72 opacity-40" alt="JavaScript">' },
    { name: 'React', icon: '<i class="fab fa-react text-6xl text-cyan-500 mb-3"></i>', music: './music/tg4.mp3', bgIcon: '<img src="https://th.bing.com/th/id/OIP.9485Ti-M1KbzT9K4ZShMdAHaHO?rs=1&pid=ImgDetMain" class="w-72 h-72 opacity-40" alt="React">' },
    { name: 'Laravel', icon: '<img src="https://logospng.org/download/laravel/logo-laravel-icon-1024.png" class="w-16 h-16 mb-3" alt="Laravel">', music: './music/tg5.m4a', bgIcon: '<img src="https://logospng.org/download/laravel/logo-laravel-icon-1024.png" class="w-72 h-72 opacity-40" alt="Laravel">' },
    { name: 'PHP', icon: '<img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3259795/php-icon-md.png" class="w-16 h-16 mb-3" alt="PHP">', music: './music/tg6.mp3', bgIcon: '<img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3259795/php-icon-md.png" class="w-72 h-72 opacity-40" alt="PHP">' },
    { name: 'Git', icon: '<i class="fab fa-git-alt text-6xl text-red-600 mb-3"></i>', music: './music/tg7.mp3', bgIcon: '<img src="https://th.bing.com/th/id/OIP.lhH2AodxozEbYxSDLz8BUAHaEK?rs=1&pid=ImgDetMain" class="w-100 h-72 opacity-40" alt="Git">' },
    { name: 'MySQL', icon: '<img src="https://th.bing.com/th/id/OIP.63jNc3AqvI3loUog55YBhwHaHa?rs=1&pid=ImgDetMain" class="w-16 h-16 mb-3" alt="MySQL">', music: './music/tg8.mp3', bgIcon: '<img src="https://th.bing.com/th/id/OIP.63jNc3AqvI3loUog55YBhwHaHa?rs=1&pid=ImgDetMain" class="w-72 h-72 opacity-40" alt="MySQL">' },
    { name: 'Github', icon: '<img src="https://logowik.com/content/uploads/images/github9775.jpg" class="w-16 h-12 mb-3" alt="Github">', music: './music/tg9.mp3', bgIcon: '<img src="https://logowik.com/content/uploads/images/github9775.jpg" class="w-72 h-56 opacity-40" alt="Github">' },
    { name: 'Bootstrap', icon: '<img src="https://th.bing.com/th/id/OIP.KTq5K5E3QeLVrm71FR0w8gHaHa?rs=1&pid=ImgDetMain" class="w-16 h-16 mb-3" alt="Bootstrap">', music: './music/tg10.mp3', bgIcon: '<img src="https://www.pinclipart.com/picdir/middle/35-353932_bootstrap-bootstrap-4-logo-png-clipart.png" class="w-72 h-72 opacity-40" alt="Bootstrap">' },
    { name: 'Tailwind', icon: '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042" class="w-16 h-12 mb-3" alt="Tailwind">', music: './music/tg11.mp3', bgIcon: '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042" class="w-72 h-56 opacity-40" alt="Tailwind">' },
    { name: 'WordPress', icon: '<img src="https://cdn3.iconfinder.com/data/icons/flat-icons-web/40/WordPress-512.png" class="w-16 h-12 mb-3" alt="Tailwind">', music: './music/tg11.mp3', bgIcon: '<img src="https://cdn3.iconfinder.com/data/icons/flat-icons-web/40/WordPress-512.png" class="w-72 h-56 opacity-40" alt="WordPress">' },
];

const projects = [
    { name: "bán thuốc và đặt lịch khám", img: "./dlkvabt.png", video: "./thuoclichkham.mp4", desc: "Tích hợp chức năng bán thuốc trực tuyến và đặt lịch khám bệnh. Dự án này bao gồm việc phát triển giao diện người dùng thân thiện cho phép tìm kiếm, xem thông tin chi tiết sản phẩm, quản lý đơn hàng, đặt lịch hẹn và tương tác với bộ phận hỗ trợ. Đồng thời, xây dựng hệ thống quản lý phía sau cho phép quản lý sản phẩm, đơn hàng và lịch hẹn hiệu quả.", github: "https://github.com/thangpo/BE-DATN-WD930.git", timeline: [{ title: "Bắt đầu", time: "1/09/2024", end: "6/09/2024", work: "Phân tích yêu cầu, thiết kế giao diện..." }, { title: "Hoàn thiện", time: "7/09/2024", end: "7/10/2024", work: "CRUD, thanh toán..." }, { title: "Kết thúc", time: "10/10/2024", end: "15/10/2024", work: "Kiểm thử..." }] },
    { name: "Quản lý nhóm nhạc", img: "./idol.png", video: "./idol.mp4", desc: "Hệ thống quản lý nhóm nhạc hiệu quả, hỗ trợ quản lý thành viên, nội dung, lịch trình, và tương tác trực tiếp với người hâm mộ qua vé, live, và nhắn tin. Hệ thống quản lý nhóm nhạc được thiết kế để giải quyết những thách thức đặc thù mà các nhóm nhạc hiện đại phải đối mặt, từ tổ chức nội bộ đến tương tác với công chúng. Mục tiêu là tạo ra một nền tảng liền mạch, giúp nhóm nhạc tập trung vào sáng tạo và biểu diễn.", github: "https://github.com/thangpo/datn.git", timeline: [{ title: "Bắt đầu", time: "01/04/2024", end: "15/04/2024", work: "Thiết kế db..." }, { title: "Hoàn thiện", time: "16/04/2024", end: "28/05/2024", work: "Phát triển chức năng..." }, { title: "Kết thúc", time: "29/05/2024", end: "5/6/2024", work: "Kiểm thử..." }] },
    { name: "Bán sách", img: "./sach.jpg", video: "./bansach.mp4", desc: "Mục tiêu: Xây dựng hệ thống quản lý bán sách trực tuyến với giao diện admin và người dùng, hỗ trợ CRUD, thống kê, và các tính năng thương mại điện tử. Hệ thống bán sách trực tuyến toàn diện, hỗ trợ quản lý sách, đơn hàng, tài khoản, đánh giá, và tin tức, với giao diện admin mạnh mẽ và trải nghiệm người dùng tiện lợi.", github: "https://github.com/thangpo/python.git", timeline: [{ title: "Bắt đầu", time: "01/01/2024", end: "15/01/2024", work: "Phân tích yêu cầu..." }, { title: "Hoàn thiện", time: "16/01/2024", end: "28/01/2024", work: "Phát triển chức năng..." }, { title: "Kết thúc", time: "29/01/2024", end: "31/01/2024", work: "Kiểm thử..." }] },
    { name: "Thương mại điện tử", img: "./bangiay.png", video: "./giay.mp4", desc: "Thương Mại Điện Tử Giày Dép: Kết Nối Đam Mê và Phong Cách. Hệ thống này không chỉ đơn thuần là nơi mua bán, mà còn là một không gian tương tác, kết nối những người đam mê giày, từ người bán chuyên nghiệp đến những sneakerhead đích thực. Trải Nghiệm Mua Sắm Cá Nhân Hóa và Tương Tác Cộng Đồng", github: "https://github.com/thangpo/bangiay.git", timeline: [{ title: "Bắt đầu", time: "01/01/2024", end: "15/01/2024", work: "Phân tích yêu cầu..." }, { title: "Hoàn thiện", time: "16/01/2024", end: "28/01/2024", work: "Phát triển chức năng..." }, { title: "Kết thúc", time: "29/01/2024", end: "31/01/2024", work: "Kiểm thử..." }] },
    { name: "Bán thuốc và quản lý kho", img: "./banthuoc.png", video: "./thuoc.mp4", desc: "Ý tưởng về một hệ thống toàn diện áp dụng vào lĩnh vực bán thuốc và quản lý kho dược phẩm sẽ tạo ra một nền tảng chuyên biệt, không chỉ giúp các nhà thuốc, quầy thuốc hoạt động hiệu quả hơn mà còn đảm bảo chất lượng, an toàn và truy xuất nguồn gốc sản phẩm. Đây là một hệ thống thiết yếu để hiện đại hóa ngành dược, nâng cao dịch vụ chăm sóc sức khỏe cộng đồng.", github: "https://github.com/thangpo/BE-DATN-SP25.git", timeline: [{ title: "Bắt đầu", time: "01/01/2024", end: "15/01/2024", work: "Phân tích yêu cầu..." }, { title: "Hoàn thiện", time: "16/01/2024", end: "28/01/2024", work: "Phát triển chức năng..." }, { title: "Kết thúc", time: "29/01/2024", end: "31/01/2024", work: "Kiểm thử..." }] },
    { name: "Blog các nhân", img: "./blog.png", video: "./blog.mp4", desc: "Trên blog này, mình sẽ ghi lại những gì mình đã học được, những kinh nghiệm quý báu và cả những bài học xương máu trong quá trình thực tập Dự án cá nhân: Mình sẽ chia sẻ về các dự án nhỏ mình đã tự xây dựng, từ ý tưởng ban đầu đến sản phẩm hoàn chỉnh Những suy nghĩ và cảm nhận: Đôi khi, mình cũng sẽ tâm sự về những cảm xúc, khó khăn và động lực trong quá trình học tập và làm việc", github: "https://github.com/thangpo/TG-MP3.git", timeline: [{ title: "Bắt đầu", time: "01/01/2024", end: "15/01/2024", work: "Phân tích yêu cầu..." }, { title: "Hoàn thiện", time: "16/01/2024", end: "28/01/2024", work: "Phát triển chức năng..." }, { title: "Kết thúc", time: "29/01/2024", end: "31/01/2024", work: "Kiểm thử..." }] },
];

let shapeIndex = 0;
let playingIndex = null;
let audioData = [];
let audioCtx = null;
let analyser = null;
let source = null;
let rafId = null;

const avatarShape = document.getElementById('avatarShape');
const introText = document.getElementById('introText');
const skillsGrid = document.getElementById('skillsGrid');
const projectsGrid = document.getElementById('projectsGrid');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const showQR = document.getElementById('showQR');
const qrModal = document.getElementById('qrModal');
const closeQR = document.getElementById('closeQR');
const audioPlayer = document.getElementById('audioPlayer');
const musicWaveCanvas = document.getElementById('musicWaveCanvas');
const cvCard = document.getElementById('cvCard');

setTimeout(() => {
    introText.classList.remove('opacity-0', 'translate-y-8');
    introText.classList.add('opacity-100', 'translate-y-0');
}, 800);

setInterval(() => {
    shapeIndex = (shapeIndex + 1) % shapes.length;
    avatarShape.className = `flex-shrink-0 w-48 h-48 overflow-hidden shadow-lg transition-all duration-700 ease-in-out ${shapes[shapeIndex]} ${shapeIndex === 3 ? 'clip-triangle' : ''} ${shapeIndex === 4 ? 'clip-hexagon' : ''}`;
}, 1200);

skills.forEach((skill, idx) => {
    const div = document.createElement('div');
    div.className = 'flex flex-col items-center cursor-pointer group relative';
    div.innerHTML = `
        <div class="relative">${skill.icon}
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10" id="wave-${idx}" style="display: none;">
                <canvas width="120" height="120" class="absolute inset-0 pointer-events-none" style="filter: blur(0.3px);"></canvas>
            </div>
        </div>
        <span class="text-lg font-semibold transition text-gray-800 group-hover:text-indigo-600">${skill.name}</span>
    `;

    const bgContainer = document.createElement('div');
    bgContainer.id = `skill-bg-${idx}`;
    bgContainer.innerHTML = skill.bgIcon;
    bgContainer.className = 'fixed inset-0 w-full h-full opacity-0 transition-opacity duration-500 pointer-events-none -z-10';
    document.body.appendChild(bgContainer);

    div.addEventListener('click', () => {
        document.querySelectorAll('[id^="skill-bg-"]').forEach(bg => {
            bg.classList.remove('opacity-40');
            bg.classList.add('opacity-0');
        });

        if (playingIndex === idx) {
            playingIndex = null;
            document.getElementById(`wave-${idx}`).style.display = 'none';
            document.getElementById(`skill-bg-${idx}`).classList.remove('opacity-40');
            document.getElementById(`skill-bg-${idx}`).classList.add('opacity-0');
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
            cancelAnimationFrame(rafId);
            audioData = [];
        } else {
            playingIndex = idx;
            document.querySelectorAll('[id^="wave-"]').forEach(w => w.style.display = 'none');
            document.getElementById(`wave-${idx}`).style.display = 'block';
            document.getElementById(`skill-bg-${idx}`).classList.remove('opacity-0');
            document.getElementById(`skill-bg-${idx}`).classList.add('opacity-40');
            audioPlayer.src = skill.music;
            audioPlayer.currentTime = 0;
            audioPlayer.play().catch(() => { });
            if (!audioCtx) {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                analyser = audioCtx.createAnalyser();
                source = audioCtx.createMediaElementSource(audioPlayer);
                source.connect(analyser);
                analyser.connect(audioCtx.destination);
                analyser.fftSize = 64;
            }
            const animate = () => {
                const dataArray = new Uint8Array(analyser.frequencyBinCount);
                analyser.getByteFrequencyData(dataArray);
                audioData = [...dataArray];
                drawMusicWave(idx);
                rafId = requestAnimationFrame(animate);
            };
            animate();
        }
    });
    skillsGrid.appendChild(div);
});

function drawMusicWave(idx) {
    const canvas = document.getElementById(`wave-${idx}`).querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const baseRadius = 35;
    let time = 0;

    const particles = [];
    for (let i = 0; i < 300; i++) {
        const phi = Math.acos(-1 + (2 * i) / 300);
        const theta = Math.sqrt(300 * Math.PI) * phi;
        particles.push({
            phi, theta, x: 0, y: 0, z: 0, originalRadius: baseRadius,
            opacity: 0.5 + Math.random() * 0.5, pulseOffset: Math.random() * Math.PI * 2
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        time += 0.025;

        const audioIntensity = audioData.length > 0
            ? audioData.reduce((sum, val) => sum + val, 0) / audioData.length / 255
            : Math.sin(time * 2) * 0.5 + 0.5;

        particles.forEach(particle => {
            const waveEffect = Math.sin(time * 3 + particle.pulseOffset) * audioIntensity * 12;
            const currentRadius = particle.originalRadius + waveEffect;
            particle.x = currentRadius * Math.sin(particle.phi) * Math.cos(particle.theta);
            particle.y = currentRadius * Math.sin(particle.phi) * Math.sin(particle.theta);
            particle.z = currentRadius * Math.cos(particle.phi);

            const scale = 180 / (180 + particle.z);
            const x2d = centerX + particle.x * scale;
            const y2d = centerY + particle.y * scale;
            const hue = (particle.theta * 180 / Math.PI + time * 40) % 360;
            const saturation = 65 + audioIntensity * 25;
            const lightness = 45 + audioIntensity * 25;
            const depthOpacity = (particle.z + currentRadius) / (currentRadius * 2);
            const finalOpacity = particle.opacity * depthOpacity * (0.4 + audioIntensity * 0.6);

            ctx.beginPath();
            const size = (0.7 + audioIntensity * 1.2) * scale;
            ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${finalOpacity})`;
            ctx.fill();

            ctx.shadowBlur = 6 + audioIntensity * 10;
            ctx.shadowColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
            ctx.fill();
            ctx.shadowBlur = 0;
        });

        const coreRadius = 6 + audioIntensity * 15;
        const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, coreRadius);
        gradient.addColorStop(0, `rgba(100, 200, 255, ${0.7 * audioIntensity})`);
        gradient.addColorStop(0.5, `rgba(50, 150, 255, ${0.3 * audioIntensity})`);
        gradient.addColorStop(1, 'rgba(0, 100, 255, 0)');

        ctx.beginPath();
        ctx.arc(centerX, centerY, coreRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
    }
    animate();
}

projects.forEach((project, idx) => {
    const article = document.createElement('article');
    article.className = 'flip-card min-h-[380px] relative';
    article.innerHTML = `
        <div class="flip-card-inner h-full">
            <div class="flip-card-front bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
                <div class="relative w-full h-48" onmouseenter="hoverProject(${idx})" onmouseleave="unhoverProject(${idx})">
                    <img alt="${project.desc}" class="w-full h-48 object-cover transition-opacity duration-500" height="400" src="${project.img}" width="600">
                    <video src="${project.video}" class="absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-500 opacity-0" id="video-${idx}" autoplay muted loop playsinline style="z-index: 2"></video>
                </div>
                <div class="p-5">
                    <h4 class="text-xl font-semibold mb-2 text-indigo-700">${project.name}</h4>
                    <p class="text-gray-700 text-sm leading-relaxed">${project.desc}</p>
                </div>
            </div>
            <div class="flip-card-back bg-white rounded-lg shadow-md flex flex-col items-center justify-center p-5">
                <div class="relative border-l-4 border-indigo-200 pl-8">
                    ${project.timeline.map(step => `
                        <div class="mb-8 last:mb-0 relative">
                            <div class="absolute -left-5 top-1 w-4 h-4 bg-indigo-600 rounded-full border-2 border-white shadow"></div>
                            <div>
                                <div class="font-bold text-indigo-700">${step.title}</div>
                                <div class="text-xs text-gray-500 mb-1">${step.time} - ${step.end}</div>
                                <div class="text-gray-700 text-sm">${step.work}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="text-center mt-4">
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="inline-block bg-gray-900 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
                        <i class="fab fa-github mr-2"></i>Xem mã nguồn trên GitHub
                    </a>
                </div>
            </div>
        </div>
    `;
    article.addEventListener('click', () => {
        article.classList.toggle('flipped');
    });
    projectsGrid.appendChild(article);
});

function hoverProject(idx) {
    document.getElementById(`video-${idx}`).classList.add('opacity-100');
    document.querySelector(`#video-${idx}`).previousElementSibling.classList.add('opacity-0');
}

function unhoverProject(idx) {
    document.getElementById(`video-${idx}`).classList.remove('opacity-100');
    document.querySelector(`#video-${idx}`).previousElementSibling.classList.remove('opacity-0');
}

menuToggle.addEventListener('click', () => mobileMenu.classList.remove('hidden'));
closeMenu.addEventListener('click', () => mobileMenu.classList.add('hidden'));
showQR.addEventListener('click', () => {
    qrModal.classList.remove('hidden');
    const modalContent = qrModal.querySelector('div');
    modalContent.classList.remove('opacity-0', 'scale-90');
    modalContent.style.animation = 'showQR 0.4s forwards';
});

closeQR.addEventListener('click', () => {
    qrModal.classList.add('hidden');
    const modalContent = qrModal.querySelector('div');
    modalContent.classList.add('opacity-0', 'scale-90');
    modalContent.style.animation = '';
});
cvCard.addEventListener('click', () => {
    const inner = cvCard.querySelector('div');
    inner.style.transform = inner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
});




document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    document.querySelectorAll('.hidden-element').forEach(element => {
        observer.observe(element);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const timeline = entry.target.querySelector('.relative');
                if (timeline) {
                    const items = timeline.querySelectorAll('.timeline-item');
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add(item.closest('.left-0') ? 'left' : 'right');
                            item.classList.add('animate');
                        }, index * 300); 
                    });
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });

    const workExperience = document.getElementById('work-experience');
    if (workExperience) {
        observer.observe(workExperience);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const title = "Xin chào, tôi là Nguyễn Giang Thắng";
    const titleElement = document.getElementById('titleText');
    titleElement.innerHTML = title.split('')
    .map((char, i) => {
        if (char === ' ') {
            return `<span class="char" style="animation-delay: ${i * 0.05}s">&nbsp;</span>`;
        }
        return `<span class="char" style="animation-delay: ${i * 0.05}s">${char}</span>`;
    })
    .join('');

    const content = [
        "Tôi là một người đam mê công nghệ, đặc biệt quan tâm đến các khía cạnh phía sau của ứng dụng web.",
        "Với kiến thức nền tảng về lập trình web và sự tò mò khám phá thế giới backend, tôi mong muốn được học hỏi và đóng góp vào việc xây dựng các hệ thống mạnh mẽ và hiệu quả.",
        "Trong tương lai, tôi hướng tới mục tiêu trở thành một Fullstack Developer, có khả năng xây dựng toàn diện các ứng dụng web.",
        "Tôi tin rằng với sự nhiệt huyết và tinh thần học hỏi nhanh, tôi sẽ nhanh chóng làm quen và phát triển trong vai trò thực tập sinh backend, đây sẽ là một bước đệm quan trọng trên con đường trở thành một Fullstack chuyên nghiệp."
    ];

    const contentElement = document.getElementById('contentText');
    contentElement.innerHTML = content.map((line, i) => 
        `<p class="text-lg leading-relaxed text-gray-700 line" style="animation-delay: ${i * 0.3 + title.length * 0.05}s">${line}</p>`
    ).join('');

    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach((icon, i) => {
        icon.style.animationDelay = `${i * 0.2 + content.length * 0.3 + title.length * 0.05}s`;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeTransition = document.getElementById('darkModeTransition');
    const html = document.documentElement;
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    if (isDarkMode) {
        html.classList.add('dark');
    }

    let isTransitioning = false;

    darkModeToggle.addEventListener('click', () => {
        if (isTransitioning) return;
        isTransitioning = true;

        const isDark = html.classList.contains('dark');
        darkModeTransition.classList.add('active');

        darkModeToggle.style.pointerEvents = 'none';

        setTimeout(() => {
            if (isDark) {
                html.classList.remove('dark');
                localStorage.setItem('darkMode', 'false');
            } else {
                html.classList.add('dark');
                localStorage.setItem('darkMode', 'true');
            }

            setTimeout(() => {
                darkModeTransition.classList.remove('active');
                isTransitioning = false;
                darkModeToggle.style.pointerEvents = 'auto';
            }, 500);
        }, 500);
    });
});