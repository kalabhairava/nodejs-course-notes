# Markdown

**Not complete.**

Here is the [Github Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) 

## Paragraphs:

* Should be separated by a complete line

## Text decorations:

* **Bold** => Wrap the text in 2 stars(**) or 2 underscores(__)
* _Italic_ => Wrap the text in a star(*) or an underscore(_)
* ~~strike-through~~ => Wrap the text in 2 tildes(~~)
* Use underscore for italics, and stars for bold to make to easy to distinguish in the source code.


## Code blocks

* Wrap the code in 3 backticks(```) followed by the language in which the code is written.

    ```javascript
    const name = 'Wes';
    console.log(name);
    ```
* Even if you don't provide a language, it will still try to detect the language and format it nicely. (Is this only in GFM => Github Flavored Markdown? Verify. I don't see any syntax coloring as I type this in VS Code).

    ```
        echo "Hello"
    ```
* Inline code block => wrap the inline code in single backticks.    
    `const a = 10` creates a constant var in JS.

* tab creates a code block. Just hit tab and start typing:
    
        a block of text


### Git like diffs in markdown:

* Wrap the text in 3 backticks, followed by the word 'diff'. Prefix the line deleted with '-', and prefix the line added with '+'

    ```diff
    - var a = 100;
    + var a = 200;
    ```

    ## Headings

    - Github creates an id for every heading. This enables us to link to a specific heading on a page.
    - Maintain the heading levels carefully. Some markdown editors provide nice table contents based on the heading levels.

## Links 

- To make a link clickable, just wrap it in angular brackers www.githu.com. It works without angular brackers as well :D Probably it works differently in different markdown processors.
- [Link text](www.github.com)
- [Link text](www.github.com "Title: Hover over to see this text")
- You can also use square brackets to specify a token to the link and then specify the token anywhere in the markdown doc. This is also helpful with links that are used in multiple places. If the link changes, you just have to change it in one place(the token), and it will be reflected everywhere the link is used.

Downside of this approach: You can't specify the title. Can you? just try. You can't, I just tried.


[link][1]

[1]: www.github.com


## Tables

| Batsman | Runs  |
| ------- | ----- |
| Sachin  | 18000 |
| Kohli   | 9000  |

## Images

- 


