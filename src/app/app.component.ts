import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'colorfontchange';

  bold_text = "normal";
  bold_Text() 
  {
    this.bold_text = this.bold_text == "bold" ? "normal" : "bold";

  }

  italic_text = "normal";
  italic_Text() 
  {

    this.italic_text = this.italic_text == "italic" ? "normal" : "italic";
  }

  bg_color = "white";

  bg_Color()
  {

    this.bg_color = this.bg_color == "red" ? "white" : "red";
  }

  font_size = 16;   //default font size
  increase_font()
  {
    this.font_size = (this.font_size + 1);

  }
  decrease_font() {
    this.font_size = this.font_size - 1;
  }



    text_color="black";
    textColor()
    {
     this.text_color=this.text_color=="blue"? "black":"blue"
    }

  reset_All() 
  {

    this.bold_text = "normal";
    this.italic_text = "normal";
    this.bg_color = "white";
    this.font_size = 16;
    this.text_color="black";
  }

}
