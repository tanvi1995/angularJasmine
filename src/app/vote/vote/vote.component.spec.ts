import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteComponent } from './vote.component';
import { DebugElement } from "@angular/core";
//allow to work with elements in the view
import { By } from "@angular/platform-browser"

describe('VoteComponent', () => {
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;

  
  let debugElement: DebugElement
  let htmlElement: HTMLElement


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    
    debugElement = fixture.debugElement.query(By.css('h1'))
    htmlElement = debugElement.nativeElement
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('should display initial number of votes', ()=>{
    //act and arrange
    const initalVotes = component.totalVotes
    expect(htmlElement.textContent).toEqual('Votes: 0')

  })

  it('should increment totalVotes by 1', ()=>{

    //arrange
    const intialVotes = component.totalVotes

    //act
    component.upVote()
    fixture.detectChanges()
    const newVotes = component.totalVotes

    //assert
    expect(newVotes).toBeGreaterThan(intialVotes)

  })

  it('should decrement totalVotes by 1', ()=>{

    //arrange
    const intialVotes = component.totalVotes

    //act
    component.downVote()
    fixture.detectChanges()
    const newVotes = component.totalVotes

    //assert
    expect(newVotes).toBeLessThan(intialVotes)

  })

  it('should display the upVoted number (currentVote = 0) , after being upvoted', ()=>{
    component.upVote()
    fixture.detectChanges()
    expect(htmlElement.textContent).toBe('Votes: 1')
  })

  it('should display the downVoted number (currentVote = 0) , after being downvoted', ()=>{
    component.downVote()
    fixture.detectChanges()
    expect(htmlElement.textContent).toBe('Votes: -1')
  })
 


});
