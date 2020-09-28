import { Component, OnInit, Input } from '@angular/core';
import { Policy } from 'src/constants';

export const SAFE_POLICY = {
  icon: 'thumb-up',
  risk: 0,
};

export const UN_SAFE_POLICY = {
  icon: 'thumb-down',
  risk: 6,
};

@Component({
  selector: 'ftq-policy-guide',
  templateUrl: './policy-guide.component.html',
  styles: [':host { display: inline-flex; }'],
})
export class PolicyGuideComponent implements OnInit {
  @Input() policy: Policy;
  name: string;
  icon: string;
  color: string;
  risk: number;

  ngOnInit(): void {
    const { isSafe, policyGuide } = this.policy;

    const { icon, risk } = isSafe ? SAFE_POLICY : UN_SAFE_POLICY;
    this.risk = risk;
    this.icon = icon;
    this.name = policyGuide.name;
  }
}
