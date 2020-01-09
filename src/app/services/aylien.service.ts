import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AylienService {

  private mockedClassifyResponse = {
    text: 'Microsoft Will Never Give Up On Mobile –\nWhen Microsoft  announced its wrenching $7.6 billion write-down last week, it was easy to presume that the company was giving up on mobile. At the very least, the financial avalanche sent a strong signal that Windows phone in its current guise has failed in a major way.\n\nThe 7,800 people sacked in the process, the majority of whom came from the Windows phone division, simply accentuated that point.\n\nMicrosoft has badly wanted to be a player in the handset wars, but its market share numbers tell a consistently wretched tale. In the US, it has never managed more than a crawl, and is currently stuck at around the 3 percent mark. The company has seen somewhat higher numbers in some European markets, but there has been evidence that even those relative cratonic bastions have eroded in recent quarters.\n\nLuckily or smartly, Microsoft has placed more than one mobile bet and it doesn’t intend to live and die with handsets. It has other bullets left in the chamber including Windows 10 and the cross-platform mobile apps too.\n\nWhatever happens, Microsoft can ultimately never walk away from mobile because giving up would essentially be ceding a massive portion of the future of computing, and it simply can’t afford to do that.\n\nThe Current World View\n\nAfter some time in the soup, Microsoft has finally detailed its Windows mobile strategy well enough in the last week that we can understand it — whether that’s referring to the operating system level, hardware or cross-platform apps. Leaning on Mary Jo Foley’s excellent interview with CEO Satya Nadella, and the write-down, we can come to the following conclusions:\n\nThe company made a large wager through Windows 10’s pricing to bolster Windows mobile. \n\nHere’s the CEO:\n\n“[T]he free upgrade for Windows 10 is meant to improve our phone position. That is the reason why I made that decision. If somebody wants to know whether I’m committed to Windows Phone, they should think about what I just did with the free upgrade to Windows, rather than — hey, I[‘m] making four more phone models of value smart phones.”\n\nThat’s quite plain: Microsoft wanted to go after phone market share in the long term, and selling Windows at its old price points would limit broader Windows 10 adoption, eroding at the company’s larger value proposition of having one platform across all your devices. Put another way, the company is foregoing some identifiable revenue to prop up Windows mobile.\n\nThe company is more than willing to build its own phones — still.\n\nSatya, again:\n\n“If no OEM stands up to build Windows devices we’ll build them. There will be Lumia devices. So I’m not afraid of saying, okay, it’s all about the OEMs, or it’s all about the ecosystem. It’s about Windows. It is about the overall health of Windows and being grounded in any given day’s reality, but having ambition of where the market is going versus being bound by current definitions.”\n\nAgain, that’s simple enough. Microsoft has made new noise about picking up OEM partners to help it in its Windows mobile quest, but at the same time, the firm is willing to do its own heavy lifting if that’s what it takes.\n\nThe suspicion that Microsoft wants to get out of the phone game entirely, from a holistic or narrow hardware sense, are, for now, bunk. That fact is backed up by the following:\n\nThe company will build new phones that it hopes will accrete market share.\n\nThe CEO:\n\n“Last week’s announcement was not about any change to our vision and strategy, but for sure it was a change to our operating approach. The way we’re going to go about it. I’m not going to launch a phone a day. I’m going to focus on a few phones that actually grab share[.]”\n\nAll of the above came out of the same interview, meaning the ideas mark a single mote of time in Microsoft’s strategic arc; things may change.\n\nIn the age of a $7.6 billion write-down, it can be difficult to understand why Microsoft would keep at the mobile game. When is enough enough?  Yet, it has indicated it hasn’t nearly reached that point yet.\n\nNever Give Up, Never Surrender\n\nWhatever happens they fight on. They keep trying. The company didn’t give up when the Kin blew up on them, and neither will they give up after the $7.6B write down. They have cash and they can afford to keep going back to the drawing board — again and again. Perhaps they subject themselves to some ridicule when they fail, but they will keep trying because they understand the importance of mobile.\n\nSatya’s pitch at the Worldwide Partner’s Conference was clear. If the company can’t get at you today with handsets, it will continue to try to push from the applications angle. When Nadella says there is no clear line between the consumer world and work, he’s clearly onto something, and perhaps Microsoft’s best shot at capturing mobile mindshare is via work where it has the strongest presence today.\n\n\t\n\n\t\t\n\t\t\tWhen Nadella says there is no clear line between the consumer world and work, he’s clearly onto something, and perhaps Microsoft’s best shot at capturing mobile mindshare is via work where it has the strongest presence today.\t\t\t\t\t\n\t\n\n\t\nAs people shift to mobile devices controlled by Android and iOS, Microsoft will have a hard time, gaining market share for Windows on the phone or tablet — Surface sales not withstanding. For now that still remains a blip and a pipe dream. What Microsoft can hope to do is build on apps like Outlook and Gigjam and try to force its way into mobile via applications that work across platforms.\n\nThis really speaks to the Microsoft three-pronged strategy around mobile. On one point is the lethargic hardware, on another is Windows 10 and its multi-platform delivery model and on the final is the cross-platform application approach, where Microsoft appears to be faring much better. It has to be hoping that if you like Microsoft applications and you’re using Windows 10 at work (as many people will be), at some point in the future, you might also like Windows phones to make your work and personal lives play nicely together.\n\nMicrosoft can afford to be patient, but while it hopes that the Windows handset market will wake up, how will it affect financial markets perception of the company?\n\nFinancial Pain\n\nMicrosoft has more than enough cash to keep the Windows mobile furnaces stoked for long into the future. It is worth noting that supporting rival platforms, while doing so has costs, is likely a far cheaper enterprise than running factories and global distribution channels. (The old joke about sales being easy, and supply chaining being hard applies here.)\n\n\nHowever, given that the group’s phone businesses’ cost profile has been whacked so badly, it is reasonable to assume that Microsoft isn’t losing too much on the efforts on a quarterly basis. So while the company won’t give up on mobile, it also won’t have to give up too much on its profits. The current quarter with the massive write-down, of course, on a GAAP basis, is screwed. But that’s for investors to handicap.\n\nAlso, assuming that piggy-backing on rival platforms feeds directly into its Office 365 engine, it would make the costs of supporting third-party platforms more than palatable.\n\nIf Microsoft was willing to spend as much as it has, and keep going, it’s hard to imagine an expense that could crop up and undermine its mobile will. In for $7.6 billion, in for a pound.\n\nConclusion\n\nNobody could argue after that mammoth write-down that Microsoft’s mobile future is looking bright, but at the same time, it would be a huge mistake to underestimate Redmond. Microsoft clearly recognizes the strategic importance of mobile, and it’s going to continue to try to find a way to succeed, come hell or high water. That means it’s going to attack by app, by OS and by phone and see what works — and it’s going to keep investing until one shoe or another drops because it has no choice.',
    language: 'en',
    categories: [
      {
        label: 'company information - marketing',
        code: '04016029',
        confidence: 0.11
      }
    ]
  };

  private mockedClassifyTaxonomyResponse = {

  };

  private baseUrl = 'https://api.aylien.com/api/v1/';
  private headers = new HttpHeaders()
    .set('X-AYLIEN-TextAPI-Application-ID', '09a0e3fe')
    .set('X-AYLIEN-TextAPI-Application-Key', 'b0d62465795b2d643e3e13a348e995d4');

  constructor(
    private http: HttpClient,
  ) { }

  classify(newsUrl: string) {
    const endpointUrl = this.baseUrl + 'classify';
    return of(this.mockedClassifyResponse);
    /*return this.http.get(endpointUrl, {
        headers: this.headers,
        params: {
          url: newsUrl
        }
      }
    );*/
  }
}
