
const samples = [
  "It's just really weird because he was really young you know and it kind of like...",
  "Don't laugh at me.  I'm being serious.",
  "There's so much culture here, you know? It's just like-- --all great restaurants and-",
];

// Audio files are stored in audio/ as <sample-id>-<method-suffix>.wav.
const methods = [
  ['Ground Truth', 'gt'],
  ['本章方法', '1'],
  ['CosyVoice2 (2024)', 'cosy'],
  ['MaskGCT (2025)', 'maskgct'],
  ['F5-TTS (2025)', 'f5tts'],
  ['StyleTTS2 (2023)', 'styletts2'],
  ['VALL-E (2023)', 'valle'],
  ['FastSpeech2 (2021)', 'fastspeech'],
];
const samples = [
  { id: 'Ses01M_impro06_M015', transcript: "It's just really weird because he was really young you know and it kind of like..."},
  { id: 'Ses01F_script03_1_F011', transcript: "Don't laugh at me.  I'm being serious."},
  { id: 'Ses03F_impro07_F024', transcript: "There's so much culture here, you know? It's just like-- --all great restaurants and-" },
];
const container = document.getElementById('audio-container');

for (const [title] of methods) {
  const heading = document.createElement('div');
  heading.className = 'column-heading';
  heading.textContent = title;
  container.append(heading);
}

for (let sample = 1; sample <= samples.length; sample++) {
  for (const [title, filename] of methods) {
    const item = document.createElement('section');
    item.className = 'audio-item';
    item.setAttribute('aria-label', `样本 ${sample}，${title}`);
    const src = `audio/${samples[sample - 1].id}-${filename}.wav`;
    const label = document.createElement('p');
    label.className = 'sample-label';
    const transcript = document.createElement('p');
    transcript.className = 'audio-description';
    transcript.textContent = samples[sample - 1].transcript;
    const audio = document.createElement('audio');
    audio.className = 'audio-player';
    audio.controls = true;
    audio.preload = 'metadata';
    audio.setAttribute('aria-label', `播放样本 ${sample} 的 ${title} 音频`);
    audio.src = src;
    item.append(label, transcript, audio);
    container.append(item);
  }
}
