# Bible Verse Inserter — NotePlan Plugin

NotePlan에서 성경 구절을 한국어(개역개정) + 영어(KJV)로 즉시 삽입하는 플러그인입니다.  
A NotePlan plugin that inserts Bible verses in Korean (개역개정) and English (KJV) side by side.

---

## 미리보기 / Preview

`/bible` 명령 실행 후 `요 3:16` 또는 `John 3:16` 을 입력하면 아래처럼 삽입됩니다.

```
**📖 John 3:16**
> **16절** 하나님이 세상을 이처럼 사랑하사 독생자를 주셨으니 이는 그를 믿는 자마다 멸망하지 않고 영생을 얻게 하려 하심이라
> *For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.*
```

---

## 설치 / Installation

### 방법 1 — NotePlan Plugin Store (권장 / Recommended)

> NotePlan 플러그인 스토어를 통한 배포 준비 중입니다.

### 방법 2 — 수동 설치 / Manual Install

1. 이 저장소를 클론하거나 ZIP 다운로드  
   Clone or download this repository as ZIP

2. `duncan.bible` 폴더를 NotePlan 플러그인 디렉토리에 복사  
   Copy the `duncan.bible` folder into your NotePlan plugins directory:

   ```
   ~/Library/Application Support/co.noteplan.NotePlan3/Plugins/
   ```

3. NotePlan 재시작 후 `/bible` 명령 사용 가능  
   Restart NotePlan — the `/bible` command is now available

---

## 사용법 / Usage

NotePlan에서 `/bible` 명령어를 입력하고 구절을 입력합니다.  
Type `/bible` in NotePlan, then enter a verse reference.

| 입력 / Input | 결과 / Result |
|---|---|
| `요 3:16` | 요한복음 3장 16절 |
| `John 3:16` | John chapter 3, verse 16 |
| `요 3:16-18` | 요한복음 3장 16~18절 범위 |
| `John 3:16-18` | John chapter 3, verses 16–18 |
| `창 1:1` | 창세기 1장 1절 |
| `Gen 1:1` | Genesis chapter 1, verse 1 |

---

## 지원 책 이름 / Supported Book Names

한국어 약어, 한국어 전체 이름, 영어 전체 이름, 영어 약어 모두 지원합니다.  
Korean abbreviations, full Korean names, English full names, and English abbreviations are all supported.

<details>
<summary>전체 목록 보기 / View full list</summary>

### 구약 / Old Testament

| 책 / Book | 한국어 / Korean | English |
|---|---|---|
| Genesis | 창, 창세기 | Genesis, Gen |
| Exodus | 출, 출애굽기 | Exodus, Exod, Exo |
| Leviticus | 레, 레위기 | Leviticus, Lev |
| Numbers | 민, 민수기 | Numbers, Num |
| Deuteronomy | 신, 신명기 | Deuteronomy, Deut |
| Joshua | 수, 여호수아 | Joshua, Josh |
| Judges | 삿, 사사기 | Judges, Judg |
| Ruth | 룻, 룻기 | Ruth |
| 1 Samuel | 삼상 | 1Samuel, 1Sam, 1 Samuel, 1 Sam |
| 2 Samuel | 삼하 | 2Samuel, 2Sam, 2 Samuel, 2 Sam |
| 1 Kings | 왕상 | 1Kings, 1Kgs, 1 Kings, 1 Kgs |
| 2 Kings | 왕하 | 2Kings, 2Kgs, 2 Kings, 2 Kgs |
| 1 Chronicles | 대상 | 1Chronicles, 1Chr, 1 Chronicles, 1 Chr |
| 2 Chronicles | 대하 | 2Chronicles, 2Chr, 2 Chronicles, 2 Chr |
| Ezra | 스 | Ezra |
| Nehemiah | 느 | Nehemiah, Neh |
| Esther | 에 | Esther, Esth |
| Job | 욥, 욥기 | Job |
| Psalms | 시, 시편 | Psalms, Psalm, Ps, Psa |
| Proverbs | 잠, 잠언 | Proverbs, Prov, Pro |
| Ecclesiastes | 전, 전도서 | Ecclesiastes, Eccl, Ecc |
| Song of Solomon | 아 | SongOfSolomon, Song, SOS |
| Isaiah | 사, 이사야 | Isaiah, Isa |
| Jeremiah | 렘, 예레미야 | Jeremiah, Jer |
| Lamentations | 애 | Lamentations, Lam |
| Ezekiel | 겔, 에스겔 | Ezekiel, Ezek |
| Daniel | 단, 다니엘 | Daniel, Dan |
| Hosea | 호, 호세아 | Hosea, Hos |
| Joel | 욜, 요엘 | Joel |
| Amos | 암, 아모스 | Amos |
| Obadiah | 옵 | Obadiah, Obad |
| Jonah | 욘, 요나 | Jonah, Jon |
| Micah | 미, 미가 | Micah, Mic |
| Nahum | 나 | Nahum, Nah |
| Habakkuk | 합 | Habakkuk, Hab |
| Zephaniah | 습 | Zephaniah, Zeph |
| Haggai | 학 | Haggai, Hag |
| Zechariah | 슥 | Zechariah, Zech |
| Malachi | 말 | Malachi, Mal |

### 신약 / New Testament

| 책 / Book | 한국어 / Korean | English |
|---|---|---|
| Matthew | 마, 마태복음 | Matthew, Matt |
| Mark | 막, 마가복음 | Mark |
| Luke | 눅, 누가복음 | Luke |
| John | 요, 요한복음 | John |
| Acts | 행, 사도행전 | Acts |
| Romans | 롬, 로마서 | Romans, Rom |
| 1 Corinthians | 고전, 고린도전서 | 1Corinthians, 1Cor, 1 Corinthians, 1 Cor |
| 2 Corinthians | 고후, 고린도후서 | 2Corinthians, 2Cor, 2 Corinthians, 2 Cor |
| Galatians | 갈, 갈라디아서 | Galatians, Gal |
| Ephesians | 엡, 에베소서 | Ephesians, Eph |
| Philippians | 빌, 빌립보서 | Philippians, Phil |
| Colossians | 골, 골로새서 | Colossians, Col |
| 1 Thessalonians | 살전 | 1Thessalonians, 1Thess, 1 Thessalonians, 1 Thess |
| 2 Thessalonians | 살후 | 2Thessalonians, 2Thess, 2 Thessalonians, 2 Thess |
| 1 Timothy | 딤전 | 1Timothy, 1Tim, 1 Timothy, 1 Tim |
| 2 Timothy | 딤후 | 2Timothy, 2Tim, 2 Timothy, 2 Tim |
| Titus | 딛 | Titus, Tit |
| Philemon | 몬 | Philemon, Phlm |
| Hebrews | 히, 히브리서 | Hebrews, Heb |
| James | 약, 야고보서 | James, Jas |
| 1 Peter | 벧전 | 1Peter, 1Pet, 1 Peter, 1 Pet |
| 2 Peter | 벧후 | 2Peter, 2Pet, 2 Peter, 2 Pet |
| 1 John | 요일 | 1John, 1 John |
| 2 John | 요이 | 2John, 2 John |
| 3 John | 요삼 | 3John, 3 John |
| Jude | 유 | Jude |
| Revelation | 계, 요한계시록 | Revelation, Rev |

</details>

---

## 번역본 / Translations

| 언어 / Language | 번역 / Translation | API |
|---|---|---|
| 한국어 | 개역개정 (Korean) | `getbible.net/v2/korean` |
| English | King James Version (KJV) | `getbible.net/v2/kjv` |

성경 데이터는 [GetBible API](https://getbible.net) 를 통해 제공됩니다.  
Bible text is served by the [GetBible API](https://getbible.net).

---

## 요구사항 / Requirements

- NotePlan 3.0.21 이상 / NotePlan 3.0.21 or later
- macOS 10.15.7 이상 / macOS 10.15.7 or later
- 인터넷 연결 (API 호출) / Internet connection (for API calls)

---

## 라이선스 / License

MIT License — [LICENSE](LICENSE) 참고
