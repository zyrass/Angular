import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-interne-component',
  template: `
    <!-- TS -->
    <p>
        Je suis inscrit comme ça dans le fichier <strong>html-interne-component.component.ts</strong> :
    </p>
    <pre>
        @Component(&#123;
            selector: '.app-html-interne-component',
            <code>template: \`
              code à regarder dans le fichier TS            
            \`</code>     
            styleUrls: [
                \`
                    .resultat-div-green &#123;
                        color: green;
                        font-size: 24px;
                    &#125;
                \`
            ]
        &#125;)
    </pre>

    <!-- HTML -->
    <p>
        Dans le même fichier <strong>html-externe-component.component.ts</strong> j'inscris pour ma vue :
    </p>
    <pre class="pl-4"><code>&lt;div class="resultat-div-green"&gt;Je suis un texte de couleur vert&lt;/div&gt;</code></pre>
    <p class="lead m-0">Le résultat visuel correspond à ça : </p>
    <div class="resultat-div-green">Je suis un texte de couleur vert</div>
  `,
  styles: [
    `
      .resultat-div-green {
          color: green;
          font-size: 24px;
      }
    `
  ]
})
export class HtmlInterneComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}





