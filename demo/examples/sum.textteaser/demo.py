#!/usr/bin/python
# -*- coding: utf-8 -*-
 
"""
NOTE: Указываем title и text. В итоге получаем текст поменьше 
"""

from textteaser import TextTeaser


title = 'Про слона'
text= """
Мы подходили на пароходе к Индии. Утром должны были прийти. 
Я сменился свахты, устал и никак не мог заснуть: всё думал, как там будет.
Вот как если бмне в детстве целый ящик игрушек принесли и только завтра можно егораспаковать.
Всё думал: вот утром сразу открою глаза — и индусы, чёрные,заходят вокруг, забормочут непонятно, не то что на картинке. 
Бананы прямо накусте, город новый — всё зашевелится, заиграет. И слоны! Главное, слонов мнехотелось посмотреть. 
Всё не верилось, что они там не так, как в зоологическом,а запросто ходят, возят: по улице вдруг такая громада прёт!
Заснуть не мог, прямо ноги от нетерпения чесались. Ведь это, знаете, когда сушейедешь, совсем не то: видишь, как всё постепенно меняется. 
А тут две неделиокеан — вода и вода — и сразу новая страна. Как занавес в театре подняли.Наутро затопали на палубе, загудели. 
Я бросился к иллюминатору, кокну, — готово: город белый на берегу стоит; порт, суда, около борташлюпки; в них чёрные люди в белых чалмах — зубы блестят, кричат что-то; солнцесветит со всей силы, жмёт, кажется, светом давит. 
Тут я как с ума сошёл,задохнулся прямо: как будто я — не я, и всё это сказка.
Есть ничего с утра нехотел. Товарищи дорогие, я за вас по две вахты в море стоять буду — на береготпустите скорей!Выскочили вдвоём на берег. В порту, в городе всё бурлит, кипит, народтолчётся, а мы — как оголтелые и не знаем, что смотреть, и не идём, а будто насчто несёт (да и после моря по берегу всегда странно ходить). Смотрим трамвай.Сели в трамвай, сами толком не знаем, зачем едем, лишь бы дальше очумели прямо.Трамвай нас мчит, мы глазеем по сторонам и не заметили, как выехали на окраину.Дальше не идём. Вылезли. Дорога. Пошли по дороге. Придём куда-нибудь!Тут мы немного успокоились и заметили, что здорово жарко. Солнце над самоймаковкой стоит; тень от тебя не ложится, а вся тень под тобой: идёшь и теньсвою топчешь.Порядочно уже прошли, уж людей не стало встречаться, смотрим навстречуслон.
С ним четверо ребят — бегут рядом по дороге. Я прямо глазам не поверил: вгороде ни одного не видали, а тут запросто идёт по дороге. 
Мне казалось, что иззоологического вырвался. 
Слон нас увидел и остановился. Нам жутковато стало:больших при нём никого нет, ребята одни. А кто его знает, что у него на уме?Мотанёт раз хоботом — и готово.
"""

tt = TextTeaser()
sentences = tt.summarize(title, text)
for sentence in sentences:
  print(sentence)

"""
>>Я сменился свахты, устал и никак не мог заснуть: всё думал, как там будет.
Вот как если бмне в детстве целый ящик игрушек принесли и только завтра можно егораспаковать.
Всё думал: вот утром сразу открою глаза — и индусы, чёрные,заходят вокруг, забормочут непонятно, не то что на картинке.
Всё не верилось, что они там не так, как в зоологическом,а запросто ходят, возят: по улице вдруг такая громада прёт!
Тут я как с ума сошёл,задохнулся прямо: как будто я — не я, и всё это сказка.
"""
 

 
 

"""
NOTE:How install
"""

"""
>>> git clone https://github.com/rcelha/textteaser
>>> pip install -r textteaser/requirements.txt
"""

"""
NOTE: How it works
"""

"""
TextTeaser uses basic summarization features and build from it. Those features are:
1.Title feature is used to score the sentence with the regards to the title. It is calculated as the count of words which are common to title of the document and sentence.
2.Sentence length is scored depends on how many words are in the sentence. TextTeaser defined a constant “ideal” (with value 20), which represents the ideal length of the summary, in terms of number of words. Sentence length is calculated as a normalized distance from this value.
3.Sentence position is where the sentence is located. I learned that introduction and conclusion will have higher score for this feature.
4.Keyword frequency is just the frequency of the words used in the whole text in the bag-of-words model (after removing stop words).
"""


