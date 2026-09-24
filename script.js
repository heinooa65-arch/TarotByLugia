const cards = [
  {name:"The Fool", meaning:"New beginnings call. Leap with trust — the unknown is not a void, it is an opening."},
  {name:"The Magician", meaning:"You have the tools you need. Turn intention into action and make possibility real."},
  {name:"The High Priestess", meaning:"Your intuition already knows. Stop seeking outside answers; listen inward."},
  {name:"The Empress", meaning:"Abundance grows where you nurture. Create, rest, let things ripen in their time."},
  {name:"The Emperor", meaning:"Build with structure and confidence. Take responsibility and create stability around you."},
  {name:"The Hierophant", meaning:"Wisdom can be found through tradition, guidance, and lessons passed down before you."},
  {name:"The Lovers", meaning:"A meaningful choice is before you. Follow what aligns with your heart and values."},
  {name:"The Chariot", meaning:"Move forward with determination. Control your direction and do not let doubt take the reins."},
  {name:"Strength", meaning:"True power is gentle. Face what frightens you with patience, courage, and compassion."},
  {name:"The Hermit", meaning:"Withdraw to find your answer. Solitude now is preparation, not isolation."},
  {name:"Wheel of Fortune", meaning:"The cycle is turning. Change is arriving, and what feels uncertain may open a new path."},
  {name:"Justice", meaning:"Truth seeks balance. Face the facts honestly and let your choices carry their consequences."},
  {name:"The Hanged Man", meaning:"Pause and surrender control. A new perspective appears when you stop forcing the answer."},
  {name:"Death", meaning:"An ending makes room for transformation. Release what has run its course and allow something new to begin."},
  {name:"Temperance", meaning:"Balance brings healing. Blend patience with action and let things come together naturally."},
  {name:"The Devil", meaning:"Something may be holding you through fear, desire, or attachment. Recognize the chain before breaking it."},
  {name:"The Tower", meaning:"What is unstable may suddenly fall. Though disruptive, the collapse can reveal what is truly solid."},
  {name:"The Star", meaning:"Hope returns after the storm. Trust that healing and a clearer future are still possible."},
  {name:"The Moon", meaning:"Illusion clouds the path. What feels unclear will resolve once fear is named."},
  {name:"The Sun", meaning:"Clarity and joy are within reach. What you've worked for is beginning to show."},
  {name:"Judgement", meaning:"A moment of awakening arrives. Look honestly at the past and answer the call to grow."},
  {name:"The World", meaning:"A journey reaches completion. Celebrate how far you've come before stepping into the next chapter."},
  // Wands
  {name:"Ace of Wands", meaning:"A spark of inspiration arrives. Follow the excitement and give your new idea room to grow."},
  {name:"Two of Wands", meaning:"The world is opening ahead of you. Look beyond what you know and choose the direction you truly want."},
  {name:"Three of Wands", meaning:"Your efforts are beginning to reach beyond you. Stay patient and watch what you started move forward."},
  {name:"Four of Wands", meaning:"A moment of celebration is near. Enjoy stability, connection, and the people who make the journey meaningful."},
  {name:"Five of Wands", meaning:"Tension and competition surround you. Do not let conflict distract you from what you are trying to achieve."},
  {name:"Six of Wands", meaning:"Recognition is coming. Let yourself acknowledge how far you have come and accept the praise you have earned."},
  {name:"Seven of Wands", meaning:"Stand your ground. What you have built is worth protecting, even when others challenge you."},
  {name:"Eight of Wands", meaning:"Things are moving quickly now. Expect messages, progress, or sudden changes to arrive sooner than expected."},
  {name:"Nine of Wands", meaning:"You are tired, but not finished. Protect your boundaries and keep going with the strength you have left."},
  {name:"Ten of Wands", meaning:"You are carrying too much alone. Put down what is not yours and make space for what truly matters."},
  {name:"Page of Wands", meaning:"Curiosity is calling. Explore the unfamiliar, follow your excitement, and let yourself begin without knowing everything."},
  {name:"Knight of Wands", meaning:"Passion pushes you forward. Act boldly, but remember that speed without direction can lead you astray."},
  {name:"Queen of Wands", meaning:"Your confidence is magnetic. Trust your abilities, express yourself openly, and do not make yourself smaller."},
  {name:"King of Wands", meaning:"Lead with vision and courage. You have the ability to turn inspiration into something others can believe in."},

  // Cups
  {name:"Ace of Cups", meaning:"Your heart is opening. A new emotional beginning, connection, or wave of healing is ready to flow in."},
  {name:"Two of Cups", meaning:"A genuine connection is forming. Mutual understanding and emotional reciprocity bring two people closer."},
  {name:"Three of Cups", meaning:"Joy grows when shared. Celebrate friendship, community, and the people who make life feel lighter."},
  {name:"Four of Cups", meaning:"Something is being offered, but you may not see it yet. Look beyond disappointment and notice what is still possible."},
  {name:"Five of Cups", meaning:"Grief is asking to be acknowledged. Do not forget what remains simply because something was lost."},
  {name:"Six of Cups", meaning:"The past returns with tenderness. Memories, old connections, or familiar feelings may offer something worth understanding."},
  {name:"Seven of Cups", meaning:"Too many possibilities cloud your judgment. Separate what you truly want from what simply looks tempting."},
  {name:"Eight of Cups", meaning:"Something no longer fulfills you. Walking away may hurt, but sometimes growth begins with knowing when to leave."},
  {name:"Nine of Cups", meaning:"A wish is within reach. Allow yourself to enjoy what you have created instead of always searching for more."},
  {name:"Ten of Cups", meaning:"Emotional fulfillment surrounds you. Love, belonging, and shared happiness can become something lasting."},
  {name:"Page of Cups", meaning:"A tender message or unexpected feeling appears. Stay open to imagination, affection, and emotional surprises."},
  {name:"Knight of Cups", meaning:"Follow your heart, but keep your feet on the ground. Romance, creativity, or an emotional invitation may be approaching."},
  {name:"Queen of Cups", meaning:"Your emotional intuition is strong. Feel deeply, but protect your energy and remember your own needs."},
  {name:"King of Cups", meaning:"Emotional maturity brings strength. Feel everything without allowing your emotions to control your choices."},

  // Swords
  {name:"Ace of Swords", meaning:"Clarity cuts through confusion. A truth, idea, or decision is ready to change the way you see things."},
  {name:"Two of Swords", meaning:"You are caught between choices. Stop avoiding the truth and give yourself permission to face what you already know."},
  {name:"Three of Swords", meaning:"Pain needs to be acknowledged before it can heal. Let yourself feel the truth instead of hiding from it."},
  {name:"Four of Swords", meaning:"Rest is necessary now. Step away from the noise and allow your mind the space it needs to recover."},
  {name:"Five of Swords", meaning:"Not every battle deserves to be won. Consider what the conflict will cost you before choosing to continue."},
  {name:"Six of Swords", meaning:"You are leaving troubled waters behind. The transition may feel uncertain, but calmer ground is ahead."},
  {name:"Seven of Swords", meaning:"Something may be hidden or handled indirectly. Trust your awareness and look beyond what is being shown."},
  {name:"Eight of Swords", meaning:"The cage may be more mental than real. Challenge the beliefs that convince you there is no way forward."},
  {name:"Nine of Swords", meaning:"Your thoughts are becoming heavier than the reality itself. Bring your fears into the light instead of facing them alone."},
  {name:"Ten of Swords", meaning:"A painful chapter has reached its limit. Accept the ending and allow yourself to begin again."},
  {name:"Page of Swords", meaning:"Stay curious and alert. New information is coming, but make sure you understand the truth before reacting."},
  {name:"Knight of Swords", meaning:"Momentum is powerful now. Move toward your goal with courage, but think before letting urgency make your decisions."},
  {name:"Queen of Swords", meaning:"See the situation clearly and speak honestly. Compassion does not require you to abandon your boundaries."},
  {name:"King of Swords", meaning:"Logic brings clarity. Make decisions with a calm mind, strong principles, and a commitment to truth."},

  // Pentacles
  {name:"Ace of Pentacles", meaning:"A tangible opportunity is taking root. What begins small now could become something stable and lasting."},
  {name:"Two of Pentacles", meaning:"Life is asking you to balance competing priorities. Stay flexible and adjust without losing your center."},
  {name:"Three of Pentacles", meaning:"Growth comes through collaboration. Your skills become stronger when you learn, contribute, and build with others."},
  {name:"Four of Pentacles", meaning:"You are holding tightly to what feels safe. Protect what matters, but do not let fear prevent you from growing."},
  {name:"Five of Pentacles", meaning:"A difficult period may leave you feeling alone or uncertain. Remember that support exists even when you struggle to see it."},
  {name:"Six of Pentacles", meaning:"Give and receive with balance. Generosity matters, but healthy exchange means knowing when to accept help too."},
  {name:"Seven of Pentacles", meaning:"Progress takes patience. What you planted needs time, so pause and consider whether your effort is growing in the right direction."},
  {name:"Eight of Pentacles", meaning:"Mastery comes through repetition. Keep practicing, refining, and learning — your small efforts are becoming real skill."},
  {name:"Nine of Pentacles", meaning:"You are becoming independent and secure. Enjoy what you have built and recognize the value of your own effort."},
  {name:"Ten of Pentacles", meaning:"Something lasting is being created. Stability, family, legacy, and long-term security are becoming important themes."},
  {name:"Page of Pentacles", meaning:"A practical new beginning appears. Stay curious, learn the foundations, and turn your potential into something real."},
  {name:"Knight of Pentacles", meaning:"Slow progress is still progress. Stay disciplined, consistent, and patient with the path you have chosen."},
  {name:"Queen of Pentacles", meaning:"Create a life that feels both secure and nourishing. Care for your ambitions without forgetting to care for yourself."},
  {name:"King of Pentacles", meaning:"Stability comes through patience and responsibility. Build wisely and think beyond the moment toward what can last."}
];
const flip = document.getElementById('cardFlip');
function draw(){
  const c = cards[Math.floor(Math.random()*cards.length)];
  document.getElementById('cardName').textContent = c.name;
  document.getElementById('cardMeaning').textContent = c.meaning;
}
flip.addEventListener('click', ()=>{ if(!flip.classList.contains('flipped')){ draw(); flip.classList.add('flipped'); } });
document.getElementById('drawAgain').addEventListener('click', ()=>{ flip.classList.remove('flipped'); setTimeout(()=>{ draw(); flip.classList.add('flipped'); },450); });


const decks = [   {title:"Agatha All Along", theme:"Witchcraft & Rebellion", bestFor:"Shadow work, reclaiming power", desc:"A deck steeped in coven energy and hard-won magic — for readings that dig into power, boundaries, and the cost of survival.", cards:"The Witch, The Road, The Covenant, The Familiar", grad:"from-purple-900/40 to-obsidian"},   
                  {title:"The Little Prince", theme:"Wonder & Connection", bestFor:"Relationships, inner-child healing", desc:"Gentle, poetic symbolism for readings on love, loneliness, and what truly matters — perfect for tender, reflective questions.", cards:"The Rose, The Fox, The Asteroid, The Lamplighter", grad:"from-amber-900/30 to-obsidian"},   
                  {title:"Disney Villains", theme:"Shadow & Ambition", bestFor:"Career, desire, confronting fear", desc:"For the parts of you that want, scheme, and refuse to shrink — a bold deck for readings on ambition and unspoken desire.", cards:"The Sea Witch, The Queen, The Ringmaster, The Usurper", grad:"from-emerald-900/30 to-obsidian"}]

const grid = document.getElementById('deckGrid');
grid.innerHTML = decks.map((d,i)=>`
  <div class="rounded-2xl border hairline bg-obsidian overflow-hidden group">
    <div class="aspect-[3/4] bg-gradient-to-b ${d.grad} flex items-center justify-center">
      <span class="font-garamond italic text-3xl text-gold/70 text-center px-4">${d.title}</span>
    </div>
    <div class="p-6">
      <div class="flex gap-2 flex-wrap mb-3">
        <span class="text-xs border border-gold/40 text-gold rounded-full px-3 py-1">${d.theme}</span>
      </div>
      <p class="text-lavender text-sm font-light mb-4">${d.desc}</p>
      <button data-i="${i}" class="viewDetails text-sm text-gold border border-gold/50 rounded-full px-5 py-2 hover:bg-gold hover:text-charcoal transition-colors w-full">View Details</button>
    </div>
  </div>`).join('');

const modal = document.getElementById('deckModal');
document.querySelectorAll('.viewDetails').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const d = decks[btn.dataset.i];
    document.getElementById('modalTheme').textContent = d.theme.toUpperCase();
    document.getElementById('modalTitle').textContent = d.title;
    document.getElementById('modalDesc').textContent = d.desc;
    document.getElementById('modalBestFor').textContent = d.bestFor;
    document.getElementById('modalCards').textContent = d.cards;
    modal.classList.remove('hidden'); modal.classList.add('flex');
  });
});
document.getElementById('closeModal').addEventListener('click', ()=>{ modal.classList.add('hidden'); modal.classList.remove('flex'); });
modal.addEventListener('click', e=>{ if(e.target===modal){ modal.classList.add('hidden'); modal.classList.remove('flex'); } });

document.getElementById('menuBtn').addEventListener('click', ()=>{
  const m = document.getElementById('mobileMenu');
  m.classList.toggle('hidden'); m.classList.toggle('flex');
});

document.getElementById('contactForm').addEventListener('submit', e=>{
  e.preventDefault();
  document.getElementById('formMsg').classList.remove('hidden');
  e.target.reset();
});
