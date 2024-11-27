function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  }
  
  function loadContent(day) {
    const content = document.getElementById("content");
    const days = {
      1: `
        <h2>Day 1 Words</h2>
        <div class="word-section">
            <h3>Abound (পরিপূর্ণ হওয়া বা প্রচুর পরিমাণে থাকা)</h3>
            <p><b>Practice Sentences:</b></p>
            <ul>
              <li>The forest abounds with wildlife, making it a perfect spot for nature enthusiasts.</li>
              <li>Rumors abound about the mysterious disappearance of the treasure.</li>
              <li>His books abound with examples of historical significance.</li>
            </ul>
          </div>
          <hr>
          <div class="word-section">
            <h3>Amorphous (আকৃতিহীন বা নির্ধারিত রূপহীন)</h3>
            <p><b>Practice Sentences:</b></p>
            <ul>
              <li>The artist painted an amorphous shape that looked like a swirling mist.</li>
              <li>Without a clear plan, their strategy remained amorphous and unstructured.</li>
              <li>The concept of infinity can feel amorphous and hard to grasp.</li>
            </ul>
          </div>
          <hr>
          <div class="word-section">
            <h3>Austere (কঠোর বা সংযমী)</h3>
            <p><b>Practice Sentences:</b></p>
            <ul>
              <li>The austere design of the monastery reflected its principles of simplicity.</li>
              <li>He lived an austere life, avoiding luxury and indulgence.</li>
              <li>The teacher's austere demeanor kept the students disciplined.</li>
            </ul>
          </div>
          <hr>
          <div class="word-section">
            <h3>Belie (মিথ্যা প্রতিপন্ন করা বা ভুল ধারণা দেওয়া)</h3>
            <p><b>Practice Sentences:</b></p>
            <ul>
              <li>Her cheerful smile belied the sadness she felt inside.</li>
              <li>The simplicity of the dish belies the effort that goes into making it.</li>
              <li>His calm tone belied the anger bubbling beneath the surface.</li>
            </ul>
          </div>
          <hr>
          <div class="word-section">
            <h3>Capricious (অস্থিরমতি বা খেয়ালী)</h3>
            <p><b>Practice Sentences:</b></p>
            <ul>
              <li>The weather in the mountains is notoriously capricious.</li>
              <li>She was known for her capricious decisions that often surprised her colleagues.</li>
              <li>A capricious child can be hard to predict or please.</li>
            </ul>
          </div>
          <hr>
          <div class="word-section">
            <h3>Cerebral (মস্তিষ্ক-সংক্রান্ত বা বুদ্ধিবৃত্তিক)</h3>
            <p><b>Practice Sentences:</b></p>
            <ul>
              <li>The movie is more cerebral, appealing to those who enjoy thought-provoking themes.</li>
              <li>His approach to solving problems is highly cerebral and analytical.</li>
              <li>Chess is a cerebral game that requires strategic thinking.</li>
            </ul>
          </div>
          <hr>
          <div class="word-section">
            <h3>Congenial (সুসম্পর্কপূর্ণ বা মনোমুগ্ধকর)</h3>
            <p><b>Practice Sentences:</b></p>
            <ul>
              <li>The congenial atmosphere at the café made it her favorite spot to relax.</li>
              <li>He found a congenial group of friends who shared his love for books.</li>
              <li>The manager's congenial attitude made the workplace more enjoyable.</li>
            </ul>
          </div>
          <hr>
          <div class="word-section">
            <h3>Conspicuous (দৃষ্টিগোচর বা সুস্পষ্ট)</h3>
            <p><b>Practice Sentences:</b></p>
            <ul>
              <li>Her red dress made her conspicuous in the crowd.</li>
              <li>The error in the report was so conspicuous that everyone noticed it immediately.</li>
              <li>His conspicuous achievements earned him a promotion.</li>
            </ul>
          </div>
          <hr>
          <div class="word-section">
            <h3>Cursory (উপর উপর বা ভাসাভাসা)</h3>
            <p><b>Practice Sentences:</b></p>
            <ul>
              <li>He gave the documents a cursory glance before signing them.</li>
              <li>A cursory inspection of the car revealed no major issues.</li>
              <li>Her cursory explanation left us confused about the details.</li>
            </ul>
          </div>
          <hr>
          <div class="word-section">
            <h3>Daunting (ভীতিপ্রদ বা চ্যালেঞ্জপূর্ণ)</h3>
            <p><b>Practice Sentences:</b></p>
            <ul>
              <li>Climbing the steep mountain seemed like a daunting task.</li>
              <li>The prospect of speaking in front of a large audience was daunting for her.</li>
              <li>Preparing for the exam felt daunting at first, but he managed it well.</li>
            </ul>
          </div>
          <hr>
          <div class="word-section">
            <h3>Deify (দেবত্ব আরোপ করা)</h3>
            <p><b>Practice Sentences:</b></p>
            <ul>
              <li>Some people deify celebrities, treating them as if they can do no wrong.</li>
              <li>The ancient civilization used to deify the sun and the moon.</li>
              <li>It’s important not to deify leaders but to hold them accountable.</li>
            </ul>
          </div>
          <hr>
          <div class="word-section">
            <h3>Didactic (শিক্ষামূলক বা নীতিশিক্ষামূলক)</h3>
            <p><b>Practice Sentences:</b></p>
            <ul>
              <li>The didactic nature of the book made it suitable for young readers.</li>
              <li>Her didactic tone during the lecture bored the students.</li>
              <li>The story was entertaining but also had a didactic message about kindness.</li>
            </ul>
          </div>
          <hr>
          <div class="word-section">
            <h3>Disseminate (প্রচার করা বা ছড়িয়ে দেওয়া)</h3>
            <p><b>Practice Sentences:</b></p>
            <ul>
              <li>Social media helps disseminate information quickly across the globe.</li>
              <li>The organization works to disseminate knowledge about environmental issues.</li>
              <li>The teacher used visual aids to disseminate the lesson more effectively.</li>
            </ul>
          </div>
          <hr>
          <div class="word-section">
            <h3>Feasible (সম্ভব বা বাস্তবসম্মত)</h3>
            <p><b>Practice Sentences:</b></p>
            <ul>
              <li>The plan is feasible if we can secure the required funding.</li>
              <li>Building a bridge across the river is technically feasible but expensive.</li>
              <li>It’s not feasible to complete the project within one week.</li>
            </ul>
          </div>
          <hr>
          <div class="word-section">
            <h3>Flout (উপেক্ষা করা বা অবজ্ঞা করা)</h3>
            <p><b>Practice Sentences:</b></p>
            <ul>
              <li>He flouted the rules and faced a hefty fine.</li>
              <li>People who flout safety regulations endanger themselves and others.</li>
              <li>Her decision to flout tradition shocked her conservative family.</li>
            </ul>
          </div>
          <hr>
          <div class="word-section">
            <h3>Homogeneous (সদৃশ বা একই ধরনের)</h3>
            <p><b>Practice Sentences:</b></p>
            <ul>
              <li>The city is known for its homogeneous architecture.</li>
              <li>The group was homogeneous, consisting only of people with similar backgrounds.</li>
              <li>A homogeneous mixture is easy to identify in chemistry.</li>
            </ul>
          </div>
          <hr>
          <div class="word-section">
            <h3>Humdrum (একঘেয়ে বা বিরক্তিকর)</h3>
            <p><b>Practice Sentences:</b></p>
            <ul>
              <li>He wanted to escape the humdrum routine of his 9-to-5 job.</li>
              <li>The lecture was humdrum and failed to keep the students engaged.</li>
              <li>They planned a trip to break the monotony of their humdrum lives.</li>
            </ul>
          </div>
          <hr>
          <div class="word-section">
            <h3>Insipid (নির্বোধ বা পানশে)</h3>
            <p><b>Practice Sentences:</b></p>
            <ul>
              <li>The soup was insipid and lacked seasoning.</li>
              <li>He found the novel insipid and stopped reading it halfway.</li>
              <li>The conversation was insipid and failed to capture anyone’s interest.</li>
            </ul>
          </div>
          <hr>
          <div class="word-section">
            <h3>Loquacious (বাচাল বা অতিরিক্ত কথা বলে এমন)</h3>
            <p><b>Practice Sentences:</b></p>
            <ul>
              <li>The loquacious host kept the guests entertained all evening.</li>
              <li>Her loquacious nature often made meetings run longer than necessary.</li>
              <li>He grew tired of the loquacious stranger sitting next to him on the bus.</li>
            </ul>
          </div>
          <hr>
          <div class="word-section">
            <h3>Misanthropic (মানুষবিদ্বেষী)</h3>
            <p><b>Practice Sentences:</b></p>
            <ul>
              <li>His misanthropic attitude made it hard for him to form friendships.</li>
              <li>The character in the novel was a misanthropic recluse who avoided society.</li>
              <li>Some people mistake introverts for being misanthropic, but they’re not.</li>
            </ul>
          </div>
          <hr>
          <div class="word-section">
            <h3>Misnomer (ভুল নাম বা ভুল উপাধি)</h3>
            <p><b>Practice Sentences:</b></p>
            <ul>
              <li>Calling him a "genius" was a misnomer given his average grades.</li>
              <li>It’s a misnomer to call this dessert a “cake” since it’s more like a pudding.</li>
              <li>The term “silent movie” is a misnomer because music often accompanied them.</li>
            </ul>
          </div>
          <hr>
          <div class="word-section">
            <h3>Negligent (উদাসীন বা অবহেলাপূর্ণ)</h3>
            <p><b>Practice Sentences:</b></p>
            <ul>
              <li>The company was found negligent in maintaining safety standards.</li>
              <li>His negligent attitude towards studies led to poor grades.</li>
              <li>She was negligent in locking the door, which led to the robbery.</li>
            </ul>
          </div>
          <hr>
          <div class="word-section">
            <h3>Obsequious (অতিমাত্রায় চাটুকার বা তোষামোদপূর্ণ)</h3>
            <p><b>Practice Sentences:</b></p>
            <ul>
              <li>His obsequious behavior towards the boss annoyed his coworkers.</li>
              <li>The waiter’s obsequious attitude felt insincere and unnecessary.</li>
              <li>She disliked people who were overly obsequious and preferred honesty.</li>
            </ul>
          </div>
          <hr>
          <div class="word-section">
            <h3>Placate (শান্ত করা বা তুষ্ট করা)</h3>
            <p><b>Practice Sentences:</b></p>
            <ul>
              <li>He tried to placate the angry customer by offering a refund.</li>
              <li>The teacher placated the students with promises of extra credit.</li>
              <li>Gifts and kind words were used to placate the upset child.</li>
            </ul>
          </div>
          <hr>
          <div class="word-section">
            <h3>Proclivity (ঝোঁক বা প্রবণতা)</h3>
            <p><b>Practice Sentences:</b></p>
            <ul>
              <li>He has a proclivity for solving puzzles quickly.</li>
              <li>Her proclivity for organization made her a great project manager.</li>
              <li>Some people have a natural proclivity towards creative thinking.</li>
            </ul>
          </div>
          <hr>
          <div class="word-section">
            <h3>Puerile (শিশুসুলভ বা বোকা)</h3>
            <p><b>Practice Sentences:</b></p>
            <ul>
              <li>His puerile jokes failed to amuse the audience.</li>
              <li>The argument descended into puerile name-calling.</li>
              <li>She criticized his puerile behavior during the meeting.</li>
            </ul>
          </div>
          <hr>
          <div class="word-section">
            <h3>Quixotic (অবাস্তব বা অত্যধিক আদর্শবাদী)</h3>
            <p><b>Practice Sentences:</b></p>
            <ul>
              <li>His quixotic quest to save the world from pollution was inspiring but impractical.</li>
              <li>The novel featured a quixotic hero who fought for an unattainable dream.</li>
              <li>Her quixotic plan to travel the world on foot seemed impossible.</li>
            </ul>
          </div>
          <hr>
          <div class="word-section">
            <h3>Spendthrift (অপচয়কারী বা অর্থ নষ্ট করে এমন)</h3>
            <p><b>Practice Sentences:</b></p>
            <ul>
              <li>He was a spendthrift, often splurging on unnecessary items.</li>
              <li>The family had to budget carefully because of their son’s spendthrift habits.</li>
              <li>His spendthrift ways left him with no savings.</li>
            </ul>
          </div>
          <hr>
          <div class="word-section">
            <h3>Taciturn (স্বল্পভাষী বা মিতভাষী)</h3>
            <p><b>Practice Sentences:</b></p>
            <ul>
              <li>The taciturn boy rarely spoke, even among friends.</li>
              <li>His taciturn nature made him appear aloof to strangers.</li>
              <li>The taciturn manager preferred emails over face-to-face conversations.</li>
            </ul>
          </div>
          <hr>
          <div class="word-section">
            <h3>Wary (সতর্ক বা সন্দেহপ্রবণ)</h3>
            <p><b>Practice Sentences:</b></p>
            <ul>
              <li>She was wary of strangers offering unsolicited help.</li>
              <li>The dog seemed wary of new visitors to the house.</li>
              <li>Investors remain wary of the unpredictable market conditions.</li>
            </ul>
          </div>
          <hr>
      `,
      // Add content for other days similarly
    };
  
    // Replace content dynamically
    content.innerHTML = days[day] || `<h2>Content for Day ${day} is not available yet!</h2>`;

    // Hide the menu after clicking on a day
    menu.style.display = "none";
  }
  