// Put files in audio/ using <sample>-<method>.wav, for example 1-fastspeech2.wav.
const methods = [
  ['Ground Truth', 'gt'],
  ['本章方法', 'proposed'],
  ['CosyVoice2', 'cosyvoice2'],
  ['MaskGCT', 'maskgct'],
  ['F5-TTS', 'f5-tts'],
  ['StyleTTS2', 'styletts2'],
  ['VALL-E', 'vall-e'],
  ['FastSpeech2', 'fastspeech2'],
];
const samples = [
  "It's just really weird because he was really young you know and it kind of like...",
  "Don't laugh at me.  I'm being serious.",
  "There's so much culture here, you know? It's just like-- --all great restaurants and-",
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
    const src = `audio/${sample}-${filename}.wav`;
    const label = document.createElement('p');
    label.className = 'sample-label';
    label.textContent = `样本 ${String(sample).padStart(2, '0')}`;
    const transcript = document.createElement('p');
    transcript.className = 'audio-description';
    transcript.textContent = samples[sample - 1];
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
