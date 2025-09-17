document.addEventListener('DOMContentLoaded', () => {
    // 音频数据 - 替换为你的实际音频文件
    const audioFiles = [
        {
            id: 1,
            title: "Ground Truth",
            description: "Am I going to be getting, like, free tickets, free mileage. When can I expect my bag here?",
            src: "audio/Ses01F_impro05_F009.wav"
        },
        {
            id: 2,
            title: "Proposed",
            description: "Am I going to be getting, like, free tickets, free mileage. When can I expect my bag here?",
            src: "audio/Ses01F_impro05_F009-p.wav"
        },
        {
            id: 3,
            title: "CosyVoice2",
            description: "Am I going to be getting, like, free tickets, free mileage. When can I expect my bag here?",
            src: "audio/Ses01F_impro05_F009-c.wav"
        },
        {
            id: 4,
            title: "Vall-E",
            description: "Am I going to be getting, like, free tickets, free mileage. When can I expect my bag here?",
            src: "audio/Ses01F_impro05_F009-v.wav"
        },
        {
            id: 5,
            title: "FastSpeech",
            description: "Am I going to be getting, like, free tickets, free mileage. When can I expect my bag here?",
            src: "audio/Ses01F_impro05_F009-f.wav"
        },
        {
            id: 6,
            title: "Ground Truth",
            description: "Well now you can follow his footsteps, you know?  Carry out what he wanted to do.
",
            src: "audio/Ses03M_impro06_F016.wav"
        },
        {
            id: 7,
            title: "Proposed",
            description: "Well now you can follow his footsteps, you know?  Carry out what he wanted to do.
",
            src: "audio/Ses03M_impro06_F016-p.wav"
        },
        {
            id: 8,
            title: "CosyVoice2",
            description: "Well now you can follow his footsteps, you know?  Carry out what he wanted to do.
",
            src: "audio/Ses03M_impro06_F016-c.wav"
        },
        {
            id: 9,
            title: "Vall-E",
            description: "Well now you can follow his footsteps, you know?  Carry out what he wanted to do.
",
            src: "audio/Ses03M_impro06_F016-v.wav"
        },
        {
            id: 10,
            title: "FastSpeech",
            description: "Well now you can follow his footsteps, you know?  Carry out what he wanted to do.
",
            src: "audio/Ses03M_impro06_F016-f.wav"
        },
        {
            id: 11,
            title: "Ground Truth",
            description: "She's not his girl, Joe.  She knows she's not.
",
            src: "audio/Ses02F_script01_2_F007.wav"
        },
        {
            id: 12,
            title: "Proposed",
            description: "She's not his girl, Joe.  She knows she's not.
",
            src: "audio/Ses02F_script01_2_F007-p.wav"
        },
        {
            id: 13,
            title: "CosyVoice2",
            description: "She's not his girl, Joe.  She knows she's not.
",
            src: "audio/Ses02F_script01_2_F007-c.wav"
        },
        {
            id: 14,
            title: "Vall-E",
            description: "She's not his girl, Joe.  She knows she's not.
",
            src: "audio/Ses02F_script01_2_F007-v.wav"
        },
        {
            id: 15,
            title: "FastSpeech",
            description: "She's not his girl, Joe.  She knows she's not.
",
            src: "audio/Ses02F_script01_2_F007-f.wav"
        }
        // 添加更多音频文件...
    ];

    const audioContainer = document.getElementById('audio-container');
    const loadingIndicator = document.getElementById('loading');
    const noResults = document.getElementById('no-results');

    // 初始显示加载状态
    loadingIndicator.style.display = 'block';

    // 模拟加载延迟
    setTimeout(() => {
        // 隐藏加载指示器
        loadingIndicator.style.display = 'none';
        
        // 渲染所有音频文件
        renderAudioFiles(audioFiles);
    }, 1000);

    // 渲染音频文件的函数
    function renderAudioFiles(files) {
        // 清空容器
        audioContainer.innerHTML = '';

        // 检查是否有文件要显示
        if (files.length === 0) {
            noResults.style.display = 'block';
            return;
        } else {
            noResults.style.display = 'none';
        }

        // 创建音频元素
        files.forEach(file => {
            const audioItem = document.createElement('div');
            audioItem.className = 'audio-item';

            audioItem.innerHTML = `
                <div class="audio-info">
                    <h3 class="audio-title">${file.title}</h3>
                    <p class="audio-description">${file.description}</p>
                </div>
                <audio controls class="audio-player">
                    <source src="${file.src}" type="audio/wav">
                    Your browser does not support the audio element.
                </audio>
            `;

            audioContainer.appendChild(audioItem);
        });
    }

    // 音频播放时的动画效果
    document.addEventListener('play', (e) => {
        if (e.target.tagName === 'AUDIO') {
            const audioItem = e.target.closest('.audio-item');
            if (audioItem) {
                audioItem.style.transform = 'scale(1.02)';
                audioItem.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.15)';
            }
        }
    }, true);

    // 音频暂停时的动画效果
    document.addEventListener('pause', (e) => {
        if (e.target.tagName === 'AUDIO') {
            const audioItem = e.target.closest('.audio-item');
            if (audioItem) {
                audioItem.style.transform = '';
                audioItem.style.boxShadow = '';
            }
        }
    }, true);
});
    
