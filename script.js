// Put files in audio/ using <sample>-<method>.wav, for example 1-fastspeech2.wav.
const methods = [
  ['Ground Truth', 'gt'],
  ['本章方法', 'proposed'],
  ['CosyVoice2 [5]', 'cosyvoice2'],
  ['MaskGCT [78]', 'maskgct'],
  ['F5-TTS [77]', 'f5-tts'],
  ['StyleTTS2 [76]', 'styletts2'],
  ['VALL-E [20]', 'vall-e'],
  ['FastSpeech2 [15]', 'fastspeech2'],
];
const sampleCount = 3;
const container = document.getElementById('audio-container');

for (const [title] of methods) {
  const heading = document.createElement('div');
  heading.className = 'column-heading';
  heading.textContent = title;
  container.append(heading);
}

for (let sample = 1; sample <= sampleCount; sample++) {
  for (const [title, filename] of methods) {
    const item = document.createElement('section');
    item.className = 'audio-item';
    item.setAttribute('aria-label', `样本 ${sample}，${title}`);
    const label = document.createElement('p');
    label.className = 'sample-label';
    label.textContent = `样本 ${sample}`;
    const placeholder = document.createElement('div');
    placeholder.className = 'missing-player';
    placeholder.setAttribute('aria-label', '暂无音频，时长 0:00');
    placeholder.innerHTML = '<span class="play">▶</span><span>0:00 / 0:00</span><span class="track"></span>';
    item.append(label, placeholder);
    container.append(item);

    const src = `audio/${sample}-${filename}.wav`;
    const audio = document.createElement('audio');
    audio.className = 'audio-player';
    audio.controls = true;
    audio.preload = 'metadata';
    audio.setAttribute('aria-label', `播放样本 ${sample} 的 ${title} 音频`);
    audio.addEventListener('loadedmetadata', () => placeholder.replaceWith(audio), { once: true });
    audio.src = src;
  }
}
