// 等待 DOM 加载完成后再执行
document.addEventListener('DOMContentLoaded', function() {
    
    // 平滑滚动效果
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 添加滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 观察所有区块
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

// 技能标签悬停效果增强
document.querySelectorAll('.course-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotate(-2deg)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// 项目链接点击反馈
document.querySelectorAll('.repo-link').forEach(link => {
    link.addEventListener('click', function(e) {
        // 添加点击波纹效果
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.background = 'rgba(255, 255, 255, 0.6)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.pointerEvents = 'none';
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = e.clientX - rect.left - size/2 + 'px';
        ripple.style.top = e.clientY - rect.top - size/2 + 'px';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// 添加 CSS 动画
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes pulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }
`;
document.head.appendChild(style);

    // 页面加载完成后的提示
    window.addEventListener('load', () => {
        console.log('%c欢迎访问我的个人简历！', 
            'font-size: 20px; font-weight: bold; color: #667eea;');
        console.log('%c如果您对我的项目感兴趣，欢迎通过 GitHub 联系我！', 
            'font-size: 14px; color: #764ba2;');
    });

    // 添加打印功能快捷键
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            window.print();
        }
    });

    // 优势项的动态效果
    document.querySelectorAll('.advantage-item').forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });

    // 证书项的悬停效果
    document.querySelectorAll('.certificate-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
        });
    });
    
}); // DOMContentLoaded 结束
