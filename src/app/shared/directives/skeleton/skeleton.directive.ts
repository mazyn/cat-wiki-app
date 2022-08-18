import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  SimpleChanges,
} from '@angular/core';
import { RectangleSkeletonComponent } from '../../components/skeletons/rectangle-skeleton.component';

@Directive({ selector: '[skeleton]' })
export class SkeletonDirective {
  @Input('skeleton') isLoading = false;
  @Input('skeletonRepeat') size = 1;
  @Input('skeletonWidth') width: string | undefined;
  @Input('skeletonHeight') height: string | undefined;
  @Input('skeletonClassName') className: string | undefined;
  @Input('skeletonBgColor') bgColor: string | undefined;

  constructor(private tpl: TemplateRef<any>, private vcr: ViewContainerRef) {}

  ngAfterViewInit() {
    console.log(this.isLoading, this.size);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isLoading']) {
      this.vcr.clear();

      if (changes['isLoading'].currentValue) {
        Array.from({ length: this.size }).forEach(() => {
          const ref = this.vcr.createComponent(RectangleSkeletonComponent);

          Object.assign(ref.instance, {
            width: this.width,
            height: this.height,
            className: this.className,
            bgColor: this.bgColor,
          });
        });
      } else {
        this.vcr.createEmbeddedView(this.tpl);
      }
    }
  }
}
