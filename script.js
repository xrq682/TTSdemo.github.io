// Audio files: audio/<sample-id>-<suffix>.wav
const methods = [
  { name: 'Ground Truth', suffix: 'gt', kind: 'truth' },
  { name: '创新点二', subtitle: '面向连续特征空间的情感声学细粒度控制方法', suffix: '2', kind: 'feature' },
  { name: '创新点一', subtitle: '基于历史对话记忆的语境自适应语音合成框架', suffix: '1', kind: 'feature' },
  { name: 'CosyVoice2 (2024)', suffix: 'cosy' },
  { name: 'MaskGCT (2025)', suffix: 'maskgct' },
  { name: 'F5-TTS (2025)', suffix: 'f5tts' },
  { name: 'StyleTTS2 (2023)', suffix: 'styletts2' },
  { name: 'VALL-E (2023)', suffix: 'valle' },
  { name: 'FastSpeech2 (2021)', suffix: 'fastspeech' },
];

const samples = [
  { id: 'Ses01M_impro06_M015', transcript: "It's just really weird because he was really young you know and it kind of like..." },
  { id: 'Ses01F_script03_1_F011', transcript: "Don't laugh at me. I'm being serious." },
  { id: 'Ses03F_impro07_F024', transcript: "There's so much culture here, you know? It's just like-- --all great restaurants and-" },
];

const container = document.getElementById('audio-container');
container.replaceChildren();

const corner = document.createElement('div');
corner.className = 'corner';
corner.textContent = '对话样本 / 合成方法';
container.append(corner);

for (const method of methods) {
  const heading = document.createElement('div');
  heading.className = `column-heading ${method.kind || ''}`;
  const name = document.createElement('strong');
  name.textContent = method.name;
  heading.append(name);
  if (method.subtitle) {
    const subtitle = document.createElement('small');
    subtitle.textContent = method.subtitle;
    heading.append(subtitle);
  }
  container.append(heading);
}

samples.forEach((sample, index) => {
  const info = document.createElement('section');
  info.className = 'sample-info';
  const number = document.createElement('p');
  number.className = 'sample-number';
  number.textContent = `SAMPLE ${String(index + 1).padStart(2, '0')}`;
  const transcript = document.createElement('p');
  transcript.className = 'transcript';
  transcript.textContent = sample.transcript;
  info.append(number, transcript);
  container.append(info);

  for (const method of methods) {
    const item = document.createElement('div');
    item.className = `audio-item ${method.kind || ''}`;
    const audio = document.createElement('audio');
    audio.className = 'audio-player';
    audio.controls = true;
    audio.preload = 'metadata';
    audio.src = `audio/${sample.id}-${method.suffix}.wav`;
    audio.setAttribute('aria-label', `播放样本 ${index + 1} 的 ${method.name} 音频`);
    item.append(audio);
    container.append(item);
  }
});

