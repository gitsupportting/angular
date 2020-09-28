import {
  async,
  ComponentFixture,
  fakeAsync,
  inject,
  TestBed,
  tick,
} from '@angular/core/testing';

import { FixSpellingComponent } from './fix-spelling.component';
import { CommonModule } from '@angular/common';
import { CreateRuleRoutingModule } from '../create-rule-routing.module';
import { SharedComponentsModule } from '../../../../shared-components/shared-components.module';
import { CreateRuleDashboardComponent } from '../create-rule-dashboard/create-rule-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { NeighbouringWordsComponent } from '../neighbouring-words/neighbouring-words.component';
import { EnterTextComponent } from '../enter-text/enter-text.component';
import { CreateRuleService } from '../create-rule.service';

describe('FixSpellingComponent', () => {
  let component: FixSpellingComponent;
  let fixture: ComponentFixture<FixSpellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FixSpellingComponent,
        CreateRuleDashboardComponent,
        NeighbouringWordsComponent,
        EnterTextComponent,
      ],
      imports: [
        RouterTestingModule,
        CommonModule,
        CreateRuleRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedComponentsModule,
      ],
      providers: [
        CreateRuleService,
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({
              text: 'Test;',
            }),
            routeConfig: { path: 'fix-spelling' },
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixSpellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.smartRule.length).toBe(6);
    expect(component.smartRule[0].value).toBe('t');
    expect(component.smartRule[0].class).toBe('text-risk-0');
    expect(component.smartRule[1].value).toBe('e');
    expect(component.smartRule[1].class).toBe('text-color');
    expect(component.smartRule[2].value).toBe('s');
    expect(component.smartRule[2].class).toBe('text-color');
    expect(component.smartRule[3].value).toBe('t');
    expect(component.smartRule[3].class).toBe('text-color');
    expect(component.smartRule[4].value).toBe(';');
    expect(component.smartRule[4].class).toBe('text-highlight-alt-5');
    expect(component.smartRule[5].value).toBe(' ');
    expect(component.smartRule[5].class).toBe('text-color');
  });

  it('should get active Use Lowercase suggestion', async(() => {
    component.inputText = 'Bad Words';
    component.checkInputText();
    const spelling = component
      .convertSpelling(component.inputText)
      .filter((res) => res.name === 'Use lowercase' && res.active === true);
    expect(spelling.length).toBe(1);
  }));

  it('should get active Skip Symbols suggestion', async(() => {
    component.inputText = 'bad words!!!';
    component.checkInputText();
    const spelling = component
      .convertSpelling(component.inputText)
      .filter((res) => res.name === 'Skip Symbols' && res.active === true);
    expect(spelling.length).toBe(1);
  }));

  it('should get active Skip Symbols and Use Lowercase suggestions', async(() => {
    component.inputText = 'Bad words!!!';
    component.checkInputText();
    const spelling = component
      .convertSpelling(component.inputText)
      .filter((res) => res.active === true);
    expect(spelling.length).toBe(2);
  }));

  it('should not get active suggestions for text without symbols and capitals', async(() => {
    component.inputText = 'bad words';
    component.checkInputText();
    const spelling = component
      .convertSpelling(component.inputText)
      .filter((res) => res.active === false);
    expect(spelling.length).toBe(2);
  }));

  describe('#convertSpelling', () => {
    it('should find Uppercase letters us-en text', async(() => {
      component.inputText = 'Bad Words';
      component.checkInputText();
      const spelling = component
        .convertSpelling(component.inputText)
        .filter((res) => res.name === 'Use lowercase' && res.active === true);
      const chars = component.smartRule.filter(
        (res) => res.class === 'text-risk-0'
      );
      expect(spelling.length).toBe(1);
      expect(chars.length).toBe(2);
    }));

    it('should find Uppercase letters russian text', async(() => {
      component.inputText = 'Это Тестовый Текст';
      component.checkInputText();
      const spelling = component
        .convertSpelling(component.inputText)
        .filter((res) => res.name === 'Use lowercase' && res.active === true);
      const chars = component.smartRule.filter(
        (res) => res.class === 'text-risk-0'
      );
      expect(spelling.length).toBe(1);
      expect(chars.length).toBe(3);
    }));

    it('should find Uppercase letters armenian text', async(() => {
      component.inputText =
        'Ա Բ Գ Դ Ե Զ Է Ը Թ Ժ Ի Լ Խ Ծ Կ Հ Ձ Ղ Ճ Մ Յ Ն Շ Ո Չ Պ Ջ Ռ Ս Վ Տ Ր Ց Ւ Փ Ք Օ Ֆ';
      component.checkInputText();
      const spelling = component
        .convertSpelling(component.inputText)
        .filter((res) => res.name === 'Use lowercase' && res.active === true);
      const chars = component.smartRule.filter(
        (res) => res.class === 'text-risk-0'
      );
      expect(spelling.length).toBe(1);
      expect(chars.length).toBe(38);
    }));

    it('should find Uppercase letters czech text', async(() => {
      component.inputText = 'Á Č Ď É Ě Í Ň Ó Ř Š Ť Ú Ů Ý Ž';
      component.checkInputText();
      const spelling = component
        .convertSpelling(component.inputText)
        .filter((res) => res.name === 'Use lowercase' && res.active === true);
      const chars = component.smartRule.filter(
        (res) => res.class === 'text-risk-0'
      );
      expect(spelling.length).toBe(1);
      expect(chars.length).toBe(15);
    }));

    it('should find Uppercase letters finnish text', async(() => {
      component.inputText = 'Ä Ö Å';
      component.checkInputText();
      const spelling = component
        .convertSpelling(component.inputText)
        .filter((res) => res.name === 'Use lowercase' && res.active === true);
      const chars = component.smartRule.filter(
        (res) => res.class === 'text-risk-0'
      );
      expect(spelling.length).toBe(1);
      expect(chars.length).toBe(3);
    }));

    it('should find Uppercase letters greek text', async(() => {
      component.inputText = ' Α Β Γ Δ Ε Ζ Η Θ Ι Κ Λ Μ Ν Ξ Ο Π Ρ Σ Τ Υ Φ Χ Ψ Ω';
      component.checkInputText();
      const spelling = component
        .convertSpelling(component.inputText)
        .filter((res) => res.name === 'Use lowercase' && res.active === true);
      const chars = component.smartRule.filter(
        (res) => res.class === 'text-risk-0'
      );
      expect(spelling.length).toBe(1);
      expect(chars.length).toBe(24);
    }));

    it('should find Uppercase letters icelandic text', async(() => {
      component.inputText = 'Á Ð É Í Ó Ú Ý Þ Æ Ö';
      component.checkInputText();
      const spelling = component
        .convertSpelling(component.inputText)
        .filter((res) => res.name === 'Use lowercase' && res.active === true);
      const chars = component.smartRule.filter(
        (res) => res.class === 'text-risk-0'
      );
      expect(spelling.length).toBe(1);
      expect(chars.length).toBe(10);
    }));

    it('should find Uppercase letters maltese text', async(() => {
      component.inputText = ' Ċ Ġ Ħ Ż';
      component.checkInputText();
      const spelling = component
        .convertSpelling(component.inputText)
        .filter((res) => res.name === 'Use lowercase' && res.active === true);
      const chars = component.smartRule.filter(
        (res) => res.class === 'text-risk-0'
      );
      expect(spelling.length).toBe(1);
      expect(chars.length).toBe(4);
    }));

    it('should find Uppercase letters slovak text', async(() => {
      component.inputText = 'Á Ä Č Ď É Í Ĺ Ľ Ň Ó Ô Ŕ Š Ť Ú Ý Ž';
      component.checkInputText();
      const spelling = component
        .convertSpelling(component.inputText)
        .filter((res) => res.name === 'Use lowercase' && res.active === true);
      const chars = component.smartRule.filter(
        (res) => res.class === 'text-risk-0'
      );
      expect(spelling.length).toBe(1);
      expect(chars.length).toBe(17);
    }));

    it('should find Uppercase letters swedish text', async(() => {
      component.inputText = 'Å Ä Ö';
      component.checkInputText();
      const spelling = component
        .convertSpelling(component.inputText)
        .filter((res) => res.name === 'Use lowercase' && res.active === true);
      const chars = component.smartRule.filter(
        (res) => res.class === 'text-risk-0'
      );
      expect(spelling.length).toBe(1);
      expect(chars.length).toBe(3);
    }));

    it('should find Uppercase letters vietnamese text', async(() => {
      component.inputText = 'Ă Â Đ Ê Ô Ơ Ư Ệ Ợ';
      component.checkInputText();
      const spelling = component
        .convertSpelling(component.inputText)
        .filter((res) => res.name === 'Use lowercase' && res.active === true);
      const chars = component.smartRule.filter(
        (res) => res.class === 'text-risk-0'
      );
      expect(spelling.length).toBe(1);
      expect(chars.length).toBe(9);
    }));

    it('should find Uppercase letters azerbaijani', async(() => {
      component.inputText = 'Ç Ə Ğ İ Q Ö Ş Ü';
      component.checkInputText();
      const spelling = component
        .convertSpelling(component.inputText)
        .filter((res) => res.name === 'Use lowercase' && res.active === true);
      const chars = component.smartRule.filter(
        (res) => res.class === 'text-risk-0'
      );
      expect(spelling.length).toBe(1);
      expect(chars.length).toBe(8);
    }));

    //The initial capital checker had issues with UTF-32 chars detection.
    it('should find symbols of unicode capital symbol category Lu', async(() => {
      component.inputText =
        'unicode Lu symbols Ƹ Ժ 𝓡 𝒦 𝑰 𝘚 𝙒 𝙾 𝚴 с 𝚵 𝛹 𝝙 𝞠 𞤍 Ю 𞤘 𐓋 𐒱 𐐒 𐐅 Ʝ Ꞣ Ꝏ Ꚗ Ꜹ Ꙛ Ⲿ Ⱘ Ⱏ Ⅎ ℨ ℰ Ω ℙ ℋ';
      component.checkInputText();
      const spelling = component
        .convertSpelling(component.inputText)
        .filter((res) => res.name === 'Use lowercase' && res.active === true);
      const chars = component.smartRule.filter(
        (res) => res.class === 'text-risk-0'
      );
      expect(spelling.length).toBe(1);
      expect(chars.length).toBe(36);
    }));

    it('should find Symbols', async(() => {
      component.inputText = 'bad words!';
      component.checkInputText();
      const spelling = component
        .convertSpelling(component.inputText)
        .filter((res) => res.name === 'Skip Symbols' && res.active === true);
      expect(spelling.length).toBe(1);
    }));

    it('should not find Uppercase letters', async(() => {
      component.inputText = 'bad words';
      component.checkInputText();
      const spelling = component
        .convertSpelling(component.inputText)
        .filter((res) => res.name === 'Use lowercase' && res.active === false);
      expect(spelling.length).toBe(1);
    }));

    it('should not find Symbols', async(() => {
      component.inputText = 'bad words';
      component.checkInputText();
      const spelling = component
        .convertSpelling(component.inputText)
        .filter((res) => res.name === 'Skip Symbols' && res.active === false);
      expect(spelling.length).toBe(1);
    }));

    it('should ignore digits', async(() => {
      component.inputText = 'bad 123 words';
      component.checkInputText();
      const spelling = component
        .convertSpelling(component.inputText)
        .filter((res) => res.name === 'Skip Symbols' && res.active === false);
      expect(spelling.length).toBe(1);
    }));

    it('should find symbols of unicode other symbol category So', async(() => {
      component.inputText = 'unicode So symbols ֍ ֎ ؎ ؏ ۞ ۩ ৺ ୰ ൹';
      component.checkInputText();
      const spelling = component
        .convertSpelling(component.inputText)
        .filter((res) => res.name === 'Skip Symbols' && res.active === true);
      const chars = component.smartRule.filter(
        (res) => res.class === 'text-highlight-alt-5'
      );
      expect(spelling.length).toBe(1);
      expect(chars.length).toBe(9);
    }));

    it('should find symbols of unicode punctuation category Pc', async(() => {
      component.inputText = 'unicode Pc symbols _ ‿ ⁀ ⁔ ︳︴ ﹍ ﹎ ﹏ ＿';
      component.checkInputText();
      const spelling = component
        .convertSpelling(component.inputText)
        .filter((res) => res.name === 'Skip Symbols' && res.active === true);
      const chars = component.smartRule.filter(
        (res) => res.class === 'text-highlight-alt-5'
      );
      expect(spelling.length).toBe(1);
      expect(chars.length).toBe(10);
    }));

    it('should find symbols of unicode punctuation category Pd', async(() => {
      component.inputText =
        'unicode Pd symbols - ֊ ־  ᐀ ᠆ ‐ ‑ ‒ –  — ⸗ ⸚ ⸺ ⸻ ⹀  〜 〰 ゠ ︱ ︲ ﹘ ﹣ － 𐺭';
      component.checkInputText();
      const spelling = component
        .convertSpelling(component.inputText)
        .filter((res) => res.name === 'Skip Symbols' && res.active === true);
      const chars = component.smartRule.filter(
        (res) => res.class === 'text-highlight-alt-5'
      );
      expect(spelling.length).toBe(1);
      expect(chars.length).toBe(23);
    }));

    it('should find symbols of unicode punctuation category Pe', async(() => {
      component.inputText =
        'unicode Pe symbols  〉 ❩ ❫ ❭ ❯ ❱ ❳ ❵ ⟆ ⟧ ⟩ ⟫ ⟭ ⟯ ⦄ ⦆ ⦈ ⦊ ⦌ ⦎ ⦐ ⦒';
      component.checkInputText();
      const spelling = component
        .convertSpelling(component.inputText)
        .filter((res) => res.name === 'Skip Symbols' && res.active === true);
      const chars = component.smartRule.filter(
        (res) => res.class === 'text-highlight-alt-5'
      );
      expect(spelling.length).toBe(1);
      expect(chars.length).toBe(22);
    }));

    it('should find symbols of unicode punctuation category Pf', async(() => {
      component.inputText = 'unicode Pf symbols » ’  ” › \t⸃ ⸅ \t⸊ \t⸍ \t⸝ \t⸡';
      component.checkInputText();
      const spelling = component
        .convertSpelling(component.inputText)
        .filter((res) => res.name === 'Skip Symbols' && res.active === true);
      const coloredSymbols = component.smartRule.filter(
        (res) => res.class === 'text-highlight-alt-5'
      );
      expect(spelling.length).toBe(1);
      expect(coloredSymbols.length).toBe(10);
    }));

    it('should find symbols of unicode punctuation category Pi', async(() => {
      component.inputText = 'unicode Pi symbols «  ‘ ‛ “ ‟ ‹ ⸂ ⸄ ⸉ ⸌ ⸜';
      component.checkInputText();
      const spelling = component
        .convertSpelling(component.inputText)
        .filter((res) => res.name === 'Skip Symbols' && res.active === true);
      const chars = component.smartRule.filter(
        (res) => res.class === 'text-highlight-alt-5'
      );
      expect(spelling.length).toBe(1);
      expect(chars.length).toBe(11);
    }));

    it('should find symbols of unicode punctuation category Po', async(() => {
      component.inputText =
        'unicode Po symbols ! " ; : ? * ( ) ! @ # %  & *  _ ? " : \' ; . , / \\ , } { ] [ § ¶ ';
      component.checkInputText();
      const spelling = component
        .convertSpelling(component.inputText)
        .filter((res) => res.name === 'Skip Symbols' && res.active === true);
      const chars = component.smartRule.filter(
        (res) => res.class === 'text-highlight-alt-5'
      );
      expect(spelling.length).toBe(1);
      expect(chars.length).toBe(31);
    }));

    it('should find symbols of unicode punctuation category Ps', async(() => {
      component.inputText =
        'unicode Ps symbols ‚ „ ⁅ \t⁽ \t₍ ⌈ ⌊ 〈 ❨ ❪ ❬ ❮ ❰ ❲ ❴ ⟅ ⟦ ⟨ ⟪ ⟬ ⟮ ⦃ ⦅ ⦇ ⦉ 〈 \t《 「 『 【 〔 〖 〘 〚 〝  ﴿ ︗ ︵ ︷ ︹ ︻ ︽';
      component.checkInputText();
      const spelling = component
        .convertSpelling(component.inputText)
        .filter((res) => res.name === 'Skip Symbols' && res.active === true);
      const chars = component.smartRule.filter(
        (res) => res.class === 'text-highlight-alt-5'
      );
      expect(spelling.length).toBe(1);
      expect(chars.length).toBe(42);
    }));

    it('should find symbols of unicode currency symbol category Sc', async(() => {
      component.inputText =
        'unicode Sc symbols $ ¢ £ ¤ ¥ ֏ ؋ ߾ ߿ ৳  ৻ ૱ ௹ ฿ ₠  ₡ ₢ ₣ ₤ ₥ ₦ ₧ ₨ ₩ ₪ ₫ € ₭ ₮ ₯ ₰ ₱ ₲ ₳ ₴ ₵ ₶ ₷ ₸ ₹ ₺ ₻ ₼ ₽ ₾ ₿ ꠸ ﷼ ﹩ ＄ ￠ ￡ ￥ ￦ ';
      component.checkInputText();
      const spelling = component
        .convertSpelling(component.inputText)
        .filter((res) => res.name === 'Skip Symbols' && res.active === true);
      const chars = component.smartRule.filter(
        (res) => res.class === 'text-highlight-alt-5'
      );
      expect(spelling.length).toBe(1);
      expect(chars.length).toBe(54);
    }));

    it('should find symbols of unicode modifier symbol category Sk', async(() => {
      component.inputText =
        'unicode Sk symbols ^  ` ¨ ¯ ´ ¸ ˂ ˃ ˄ ˅ ˓ ˔ ˕ ˜ ˚ ˥ ˦ ˧ ˨ ˭ ῁ ￣ ＾ ﯀ ꞊ ꞉ ꭛';
      component.checkInputText();
      const spelling = component
        .convertSpelling(component.inputText)
        .filter((res) => res.name === 'Skip Symbols' && res.active === true);
      const chars = component.smartRule.filter(
        (res) => res.class === 'text-highlight-alt-5'
      );
      expect(spelling.length).toBe(1);
      expect(chars.length).toBe(27);
    }));

    it('should find symbols of unicode math symbols category Sm', async(() => {
      component.inputText =
        'unicode Sk symbols ≅ ≆ ≉ ≊ ≋ ≩ ≳ ≶ ≾ ⊃ ⊉ ⊒ ⋓ ⋘ ⋚ ⋛ ⋧ ⋥ ⋸ ⋵ ⎛ ⎜ ⎝ ⎨';
      component.checkInputText();
      const spelling = component
        .convertSpelling(component.inputText)
        .filter((res) => res.name === 'Skip Symbols' && res.active === true);
      const chars = component.smartRule.filter(
        (res) => res.class === 'text-highlight-alt-5'
      );
      expect(spelling.length).toBe(1);
      expect(chars.length).toBe(24);
    }));

    it('should find emoji symbols', async(() => {
      component.inputText =
        'emoji symbols 😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 😫 😴 😌 😛 😜';
      component.checkInputText();
      const spelling = component
        .convertSpelling(component.inputText)
        .filter((res) => res.name === 'Skip Symbols' && res.active === true);
      const chars = component.smartRule.filter(
        (res) => res.class === 'text-highlight-alt-5'
      );
      expect(spelling.length).toBe(1);
      expect(chars.length).toBe(19);
    }));
  });

  describe('#onAccept', () => {
    it('should navigate with lowercase text', async(
      inject(
        [ActivatedRoute, Router],
        (activatedRoute: ActivatedRoute, router: Router) => {
          spyOn(router, 'navigate');
          component.inputText = 'TeSt';
          component.onAccept('Use lowercase');
          expect(router.navigate).toHaveBeenCalledTimes(1);
          expect(router.navigate).toHaveBeenCalledWith(['/'], {
            queryParams: { text: 'test' },
            relativeTo: activatedRoute,
          });
        }
      )
    ));

    it('should navigate with unicode category Lu in lowercase', async(() => {
      component.inputText =
        'unicode Lu symbols Ƹ Ժ Ի Ԯ Ԟ Ӿ Ӣ Ӄ Ҩ Ѿ Ѣ Т Г Њ Ϣ Ⱦ Ȣ Ƕ Ǌ Ƣ Ű Ŏ\n';
      component.onAccept('Use lowercase');
      expect(component.inputText).toBe(
        'unicode lu symbols ƹ ժ ի ԯ ԟ ӿ ӣ ӄ ҩ ѿ ѣ т г њ ϣ ⱦ ȣ ƕ ǌ ƣ ű ŏ\n'
      );
    }));

    it('should not convert text with digits', async(() => {
      component.inputText = 'bad words with 123456 digits';
      component.onAccept('Use lowercase');
      expect(component.inputText).toBe('bad words with 123456 digits');
    }));

    it('should navigate and skip symbols', async(
      inject(
        [ActivatedRoute, Router],
        (activatedRoute: ActivatedRoute, router: Router) => {
          spyOn(router, 'navigate');
          component.inputText = 'TeSt#';
          component.onAccept('Skip Symbols');
          expect(router.navigate).toHaveBeenCalledTimes(1);
          expect(router.navigate).toHaveBeenCalledWith(['/'], {
            queryParams: { text: 'TeSt' },
            relativeTo: activatedRoute,
          });
        }
      )
    ));

    it('should navigate with text without symbols of unicode category So', async(
      inject(
        [ActivatedRoute, Router],
        (activatedRoute: ActivatedRoute, router: Router) => {
          spyOn(router, 'navigate');
          component.inputText =
            'unicode Pc symbols ֍ ֎ ؎ ؏ ۞ ۩ ৺ ୰ ൹ !! Text!!';
          component.onAccept('Skip Symbols');
          expect(router.navigate).toHaveBeenCalledTimes(1);
          expect(router.navigate).toHaveBeenCalledWith(['/'], {
            queryParams: { text: 'unicode Pc symbols Text' },
            relativeTo: activatedRoute,
          });
        }
      )
    ));

    it('should navigate with text without symbols of unicode category Pc', async(
      inject(
        [ActivatedRoute, Router],
        (activatedRoute: ActivatedRoute, router: Router) => {
          spyOn(router, 'navigate');
          component.inputText =
            'unicode Pc symbols _ ‿ ⁀ ⁔ ︳︴ ﹍ ﹎ ﹏ ＿ !! Text!';
          component.onAccept('Skip Symbols');
          expect(router.navigate).toHaveBeenCalledTimes(1);
          expect(router.navigate).toHaveBeenCalledWith(['/'], {
            queryParams: { text: 'unicode Pc symbols Text' },
            relativeTo: activatedRoute,
          });
        }
      )
    ));

    it('should navigate with text without symbols of unicode category Pd', async(
      inject(
        [ActivatedRoute, Router],
        (activatedRoute: ActivatedRoute, router: Router) => {
          spyOn(router, 'navigate');
          component.inputText =
            'unicode Pd symbols - ֊ ־  ᐀ ᠆ ‐ ‑ ‒ –  — ⸗ ⸚ ⸺ ⸻ ⹀  〜 〰 ゠ ︱ ︲ ﹘ ﹣ －!! Text!';
          component.onAccept('Skip Symbols');
          expect(router.navigate).toHaveBeenCalledTimes(1);
          expect(router.navigate).toHaveBeenCalledWith(['/'], {
            queryParams: { text: 'unicode Pd symbols Text' },
            relativeTo: activatedRoute,
          });
        }
      )
    ));

    it('should navigate with text without symbols of unicode category Pe', async(
      inject(
        [ActivatedRoute, Router],
        (activatedRoute: ActivatedRoute, router: Router) => {
          spyOn(router, 'navigate');
          component.inputText =
            'unicode Pe symbols  〉 ❩ ❫ ❭ ❯ ❱ ❳ ❵ ⟆ ⟧ ⟩ ⟫ ⟭ ⟯ ⦄ ⦆ ⦈ ⦊ ⦌ ⦎ ⦐ ⦒!! Text!';
          component.onAccept('Skip Symbols');
          expect(router.navigate).toHaveBeenCalledTimes(1);
          expect(router.navigate).toHaveBeenCalledWith(['/'], {
            queryParams: { text: 'unicode Pe symbols Text' },
            relativeTo: activatedRoute,
          });
        }
      )
    ));

    it('should navigate with text without symbols of unicode category Pf', async(
      inject(
        [ActivatedRoute, Router],
        (activatedRoute: ActivatedRoute, router: Router) => {
          spyOn(router, 'navigate');
          component.inputText =
            'unicode Pf symbols » ’  ” › ⸃ ⸅ ⸊ ⸍ ⸝ ⸡!! Text!';
          component.onAccept('Skip Symbols');
          expect(router.navigate).toHaveBeenCalledTimes(1);
          expect(router.navigate).toHaveBeenCalledWith(['/'], {
            queryParams: { text: 'unicode Pf symbols Text' },
            relativeTo: activatedRoute,
          });
        }
      )
    ));

    it('should navigate with text without symbols of unicode category Pi', async(
      inject(
        [ActivatedRoute, Router],
        (activatedRoute: ActivatedRoute, router: Router) => {
          spyOn(router, 'navigate');
          component.inputText =
            'unicode Pi symbols «  ‘ ‛ “ ‟ ‹ ⸂ ⸄ ⸉ ⸌ ⸜!! Text!';
          component.onAccept('Skip Symbols');
          expect(router.navigate).toHaveBeenCalledTimes(1);
          expect(router.navigate).toHaveBeenCalledWith(['/'], {
            queryParams: { text: 'unicode Pi symbols Text' },
            relativeTo: activatedRoute,
          });
        }
      )
    ));

    it('should navigate with text without symbols of unicode category Po', async(
      inject(
        [ActivatedRoute, Router],
        (activatedRoute: ActivatedRoute, router: Router) => {
          spyOn(router, 'navigate');
          component.inputText =
            'unicode Po symbols ! " ; : ? * ( ) ! @ # %  & *  _ ? " : \' ; . , / \\ , } { ] [ § ¶ !! Text!';
          component.onAccept('Skip Symbols');
          expect(router.navigate).toHaveBeenCalledTimes(1);
          expect(router.navigate).toHaveBeenCalledWith(['/'], {
            queryParams: { text: 'unicode Po symbols Text' },
            relativeTo: activatedRoute,
          });
        }
      )
    ));

    it('should navigate with text without symbols of unicode category Ps', async(
      inject(
        [ActivatedRoute, Router],
        (activatedRoute: ActivatedRoute, router: Router) => {
          spyOn(router, 'navigate');
          component.inputText =
            'unicode Ps symbols ‚ „ ⁅ ⁽ ₍ ⌈ ⌊ 〈 ❨ ❪ ❬ ❮ ❰ ❲ ❴ ⟅ ⟦ ⟨ ⟪ ⟬ ⟮ ⦃ ⦅ ⦇ ⦉ 〈 《 「 『 【 〔 〖 〘 〚 〝  ﴿ ︗ ︵ ︷ ︹ ︻ ︽!! Text!';
          component.onAccept('Skip Symbols');
          expect(router.navigate).toHaveBeenCalledTimes(1);
          expect(router.navigate).toHaveBeenCalledWith(['/'], {
            queryParams: { text: 'unicode Ps symbols Text' },
            relativeTo: activatedRoute,
          });
        }
      )
    ));

    it('should navigate with text without symbols of unicode category Sc', async(
      inject(
        [ActivatedRoute, Router],
        (activatedRoute: ActivatedRoute, router: Router) => {
          spyOn(router, 'navigate');
          component.inputText =
            'unicode Sc symbols $ ¢ £ ¤ ¥ ֏ ؋ ߾ ߿ ৳  ৻ ૱ ௹ ฿ ₠  ₡ ₢ ₣ ₤ ₥ ₦ ₧ ₨ ₩ ₪ ₫ € ₭ ₮ ₯ ₰ ₱ ₲ ₳ ₴ ₵ ₶ ₷ ₸ ₹ ₺ ₻ ₼ ₽ ₾ ₿ ꠸ ﷼ ﹩ ＄ ￠ ￡ ￥ ￦ !! Text!';
          component.onAccept('Skip Symbols');
          expect(router.navigate).toHaveBeenCalledTimes(1);
          expect(router.navigate).toHaveBeenCalledWith(['/'], {
            queryParams: { text: 'unicode Sc symbols Text' },
            relativeTo: activatedRoute,
          });
        }
      )
    ));

    it('should navigate with text without symbols of unicode category Sk', async(
      inject(
        [ActivatedRoute, Router],
        (activatedRoute: ActivatedRoute, router: Router) => {
          spyOn(router, 'navigate');
          component.inputText =
            'unicode Sk symbols ^  ` ¨ ¯ ´ ¸ ˂ ˃ ˄ ˅ ˓ ˔ ˕ ˜ ˚ ˥ ˦ ˧ ˨ ˭ ῁ ￣ ＾ ﯀ ꞊ ꞉ ꭛!! Text!';
          component.onAccept('Skip Symbols');
          expect(router.navigate).toHaveBeenCalledTimes(1);
          expect(router.navigate).toHaveBeenCalledWith(['/'], {
            queryParams: { text: 'unicode Sk symbols Text' },
            relativeTo: activatedRoute,
          });
        }
      )
    ));

    it('should navigate with text without symbols of unicode category Sm', async(
      inject(
        [ActivatedRoute, Router],
        (activatedRoute: ActivatedRoute, router: Router) => {
          spyOn(router, 'navigate');
          component.inputText =
            'unicode Sm symbols ≅ ≆ ≉ ≊ ≋ ≩ ≳ ≶ ≾ ⊃ ⊉ ⊒ ⋓ ⋘ ⋚ ⋛ ⋧ ⋥ ⋸ ⋵ ⎛ ⎜ ⎝ ⎨!! Text!';
          component.onAccept('Skip Symbols');
          expect(router.navigate).toHaveBeenCalledTimes(1);
          expect(router.navigate).toHaveBeenCalledWith(['/'], {
            queryParams: { text: 'unicode Sm symbols Text' },
            relativeTo: activatedRoute,
          });
        }
      )
    ));

    it('should navigate with text without emojis', async(
      inject(
        [ActivatedRoute, Router],
        (activatedRoute: ActivatedRoute, router: Router) => {
          spyOn(router, 'navigate');
          component.inputText =
            'emoji symbols 😀 😁 😂 🤣 😃 😄 😅 😆 😉 😊 😋 😎 😍 😘 😫 😴 😌 😛 😜!! Text!';
          component.onAccept('Skip Symbols');
          expect(router.navigate).toHaveBeenCalledTimes(1);
          expect(router.navigate).toHaveBeenCalledWith(['/'], {
            queryParams: { text: 'emoji symbols Text' },
            relativeTo: activatedRoute,
          });
        }
      )
    ));

    it('should set valid parameter to false if text is empty', async(
      inject(
        [ActivatedRoute, Router],
        (activatedRoute: ActivatedRoute, router: Router) => {
          spyOn(router, 'navigate');
          component.inputText = '';
          component.onAccept('Skip Symbols');
          expect(component.valid).toBe(false);
          expect(router.navigate).toHaveBeenCalledTimes(1);
          expect(router.navigate).toHaveBeenCalledWith(['/'], {
            queryParams: { text: '' },
            relativeTo: activatedRoute,
          });
        }
      )
    ));
  });

  describe('#onReject', () => {
    it('should switch checkLowerCase parameter after reject', async(() => {
      expect(component.checkLowerCase).toBe(true);
      component.onReject('Use lowercase');
      expect(component.checkLowerCase).toBe(false);
    }));

    it('should not apply Use Lowercase to input text after reject', async(() => {
      component.onReject('Use lowercase');
      expect(component.inputText).toBe('Test;');
    }));

    it('should apply Use Lowercase to input text after reject and then apply', async(() => {
      component.onReject('Use lowercase');
      expect(component.inputText).toBe('Test;');
      component.onAccept('Use lowercase');
      expect(component.inputText).toBe('test;');
    }));

    it('should reject Use Lowercase to input text after apply and then reject', async(() => {
      component.onAccept('Use lowercase');
      expect(component.inputText).toBe('test;');
      component.onReject('Use lowercase');
      expect(component.inputText).toBe('Test;');
    }));

    it('should switch checkSymbols parameter after reject', async(() => {
      expect(component.checkSymbols).toBe(true);
      component.onReject('Skip Symbols');
      expect(component.checkSymbols).toBe(false);
    }));

    it('should not apply Skip Symbols to input text after reject', async(() => {
      component.onReject('Skip Symbols');
      expect(component.inputText).toBe('Test;');
    }));

    it('should apply Skip Symbols to input text after reject and then apply', async(() => {
      component.onReject('Skip Symbols');
      expect(component.inputText).toBe('Test;');
      component.onAccept('Skip Symbols');
      expect(component.inputText).toBe('Test');
    }));

    it('should reject Skip Symbols to input text after apply and then reject', async(() => {
      component.onAccept('Skip Symbols');
      expect(component.inputText).toBe('Test');
      component.onReject('Skip Symbols');
      expect(component.inputText).toBe('Test;');
    }));
  });

  describe('#onNextButton', () => {
    it('should navigate to next path', async(
      inject(
        [ActivatedRoute, Router],
        (route: ActivatedRoute, router: Router) => {
          spyOn(router, 'navigate');
          route.routeConfig.path = 'fix-spelling';
          component.smartSpelling = [];
          component.valid = true;
          component.onNextButton();
          expect(router.navigate).toBeCalledTimes(1);
          expect(router.navigate).toBeCalledWith(['../neighbouring-words'], {
            queryParams: { text: 'Test;' },
            relativeTo: route,
          });
        }
      )
    ));

    it('should not navigate to next path if non of recommendations are selected', async(
      inject(
        [ActivatedRoute, Router],
        (route: ActivatedRoute, router: Router) => {
          spyOn(router, 'navigate');
          route.routeConfig.path = 'fix-spelling';
          component.inputText = 'Bad Words!';
          component.onNextButton();
          expect(router.navigate).toBeCalledTimes(0);
        }
      )
    ));
  });
});
