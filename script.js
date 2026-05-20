async function insertBibleVerse() {
  const input = await CommandBar.showInput(
    "성경 구절 / Bible verse (예: 요 3:16, John 3:16, 요 3:16-18)",
    "삽입 / Insert"
  );
  if (!input) return;

  const bookMap = {
    // Korean abbreviations & full names (구약 / Old Testament)
    "창":1,"창세기":1,"출":2,"출애굽기":2,"레":3,"레위기":3,
    "민":4,"민수기":4,"신":5,"신명기":5,"수":6,"여호수아":6,
    "삿":7,"사사기":7,"룻":8,"룻기":8,"삼상":9,"삼하":10,
    "왕상":11,"왕하":12,"대상":13,"대하":14,"스":15,"느":16,
    "에":17,"욥":18,"욥기":18,"시":19,"시편":19,"잠":20,"잠언":20,
    "전":21,"전도서":21,"아":22,"사":23,"이사야":23,"렘":24,"예레미야":24,
    "애":25,"겔":26,"에스겔":26,"단":27,"다니엘":27,"호":28,"호세아":28,
    "욜":29,"요엘":29,"암":30,"아모스":30,"옵":31,"욘":32,"요나":32,
    "미":33,"미가":33,"나":34,"합":35,"습":36,"학":37,"슥":38,"말":39,
    // Korean abbreviations & full names (신약 / New Testament)
    "마":40,"마태복음":40,"막":41,"마가복음":41,"눅":42,"누가복음":42,
    "요":43,"요한복음":43,"행":44,"사도행전":44,"롬":45,"로마서":45,
    "고전":46,"고린도전서":46,"고후":47,"고린도후서":47,
    "갈":48,"갈라디아서":48,"엡":49,"에베소서":49,
    "빌":50,"빌립보서":50,"골":51,"골로새서":51,
    "살전":52,"살후":53,"딤전":54,"딤후":55,"딛":56,"몬":57,
    "히":58,"히브리서":58,"약":59,"야고보서":59,
    "벧전":60,"벧후":61,"요일":62,"요이":63,"요삼":64,"유":65,
    "계":66,"요한계시록":66,
    // English full names & abbreviations (Old Testament)
    "Genesis":1,"Gen":1,"Exodus":2,"Exod":2,"Exo":2,"Leviticus":3,"Lev":3,
    "Numbers":4,"Num":4,"Deuteronomy":5,"Deut":5,"Joshua":6,"Josh":6,
    "Judges":7,"Judg":7,"Ruth":8,
    "1Samuel":9,"1Sam":9,"1 Samuel":9,"1 Sam":9,
    "2Samuel":10,"2Sam":10,"2 Samuel":10,"2 Sam":10,
    "1Kings":11,"1Kgs":11,"1 Kings":11,"1 Kgs":11,
    "2Kings":12,"2Kgs":12,"2 Kings":12,"2 Kgs":12,
    "1Chronicles":13,"1Chr":13,"1 Chronicles":13,"1 Chr":13,
    "2Chronicles":14,"2Chr":14,"2 Chronicles":14,"2 Chr":14,
    "Ezra":15,"Nehemiah":16,"Neh":16,"Esther":17,"Esth":17,
    "Job":18,"Psalms":19,"Psalm":19,"Ps":19,"Psa":19,
    "Proverbs":20,"Prov":20,"Pro":20,
    "Ecclesiastes":21,"Eccl":21,"Ecc":21,
    "SongOfSolomon":22,"Song":22,"SOS":22,
    "Isaiah":23,"Isa":23,"Jeremiah":24,"Jer":24,
    "Lamentations":25,"Lam":25,"Ezekiel":26,"Ezek":26,
    "Daniel":27,"Dan":27,"Hosea":28,"Hos":28,
    "Joel":29,"Amos":30,"Obadiah":31,"Obad":31,
    "Jonah":32,"Jon":32,"Micah":33,"Mic":33,
    "Nahum":34,"Nah":34,"Habakkuk":35,"Hab":35,
    "Zephaniah":36,"Zeph":36,"Haggai":37,"Hag":37,
    "Zechariah":38,"Zech":38,"Malachi":39,"Mal":39,
    // English full names & abbreviations (New Testament)
    "Matthew":40,"Matt":40,"Mark":41,"Luke":42,
    "John":43,"Acts":44,"Romans":45,"Rom":45,
    "1Corinthians":46,"1Cor":46,"1 Corinthians":46,"1 Cor":46,
    "2Corinthians":47,"2Cor":47,"2 Corinthians":47,"2 Cor":47,
    "Galatians":48,"Gal":48,"Ephesians":49,"Eph":49,
    "Philippians":50,"Phil":50,"Colossians":51,"Col":51,
    "1Thessalonians":52,"1Thess":52,"1 Thessalonians":52,"1 Thess":52,
    "2Thessalonians":53,"2Thess":53,"2 Thessalonians":53,"2 Thess":53,
    "1Timothy":54,"1Tim":54,"1 Timothy":54,"1 Tim":54,
    "2Timothy":55,"2Tim":55,"2 Timothy":55,"2 Tim":55,
    "Titus":56,"Tit":56,"Philemon":57,"Phlm":57,
    "Hebrews":58,"Heb":58,"James":59,"Jas":59,
    "1Peter":60,"1Pet":60,"1 Peter":60,"1 Pet":60,
    "2Peter":61,"2Pet":61,"2 Peter":61,"2 Pet":61,
    "1John":62,"1 John":62,"2John":63,"2 John":63,
    "3John":64,"3 John":64,"Jude":65,
    "Revelation":66,"Rev":66
  };

  const match = input.match(/^(.+?)\s+(\d+):(\d+)(-(\d+))?$/);
  if (!match) {
    await CommandBar.showAlert(
      "형식 오류 / Format error",
      "예: 요 3:16, 요 3:16-18\nEnglish: John 3:16, John 3:16-18"
    );
    return;
  }

  const bookName = match[1].trim();
  const chapter = match[2];
  const startVerse = parseInt(match[3]);
  const endVerse = match[5] ? parseInt(match[5]) : startVerse;
  const bookNum = bookMap[bookName];

  if (!bookNum) {
    await CommandBar.showAlert(
      "책 이름 오류 / Book not found",
      `"${bookName}"을 찾을 수 없습니다.\nTry: John, Matt, Gen, Rev (English) or 요, 마, 창, 계 (Korean)`
    );
    return;
  }

  const settings = DataStore.settings || {};
  const needKo = settings.showKorean !== false;
  const needEn = settings.showEnglish !== false;

  if (!needKo && !needEn) {
    await CommandBar.showAlert(
      "설정 오류 / Settings Error",
      "한국어 또는 영어 중 하나 이상 체크해주세요.\nEnable at least one language in plugin settings."
    );
    return;
  }

  const urlKo = `https://api.getbible.net/v2/korean/${bookNum}/${chapter}.json`;
  const urlEn = `https://api.getbible.net/v2/kjv/${bookNum}/${chapter}.json`;

  function buildAndInsert(ko, en) {
    let text = `**📖 ${input}**\n`;
    for (let v = startVerse; v <= endVerse; v++) {
      const vKo = ko ? ko.verses.find(vv => vv.verse === v) : null;
      const vEn = en ? en.verses.find(vv => vv.verse === v) : null;
      if (vKo) text += `> **${v}절** ${vKo.text.trim()}\n`;
      if (vEn && needKo) text += `> *${vEn.text.trim()}*\n`;
      if (vEn && !needKo) text += `> **${v}** ${vEn.text.trim()}\n`;
      if (v < endVerse) text += `>\n`;
    }
    Editor.insertTextAtCursor(text);
  }

  if (needKo && needEn) {
    fetch(urlKo)
      .then(resKo => {
        const ko = JSON.parse(resKo);
        fetch(urlEn)
          .then(resEn => buildAndInsert(ko, JSON.parse(resEn)))
          .catch(err => CommandBar.showAlert("API 오류 (EN)", `${err}`));
      })
      .catch(err => CommandBar.showAlert("API 오류 (KO)", `${err}`));
  } else if (needKo) {
    fetch(urlKo)
      .then(resKo => buildAndInsert(JSON.parse(resKo), null))
      .catch(err => CommandBar.showAlert("API 오류 (KO)", `${err}`));
  } else {
    fetch(urlEn)
      .then(resEn => buildAndInsert(null, JSON.parse(resEn)))
      .catch(err => CommandBar.showAlert("API 오류 (EN)", `${err}`));
  }
}

function onSettingsUpdated() {}