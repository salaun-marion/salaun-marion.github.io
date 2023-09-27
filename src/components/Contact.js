import React from 'react';
import '../styles/contact.css'

export default function Contact() {

    return(
        
        <div className="icon-contact">
            <p className='reach'>You can reach me there </p>
                <ul className='list-icon'>
                    <li>
                       <a className='mail' href="mailto:marion.sl@netcourrier.com">
                        {/* icon from heroicons.com */}
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            height="2em"
                            viewBox="0 0 20 20" 
                            fill="black" 
                        >
                            <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                            <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                        </svg>
                        </a> 
                    </li>
                    <li>
                       <a href = "http://github.com/salaun-marion/">
                            {/* github icon by Free Icons (https://free-icons.github.io/free-icons/) */}
                            <svg xmlns="http://www.w3.org/2000/svg" height="2em" fill="currentColor" viewBox="0 0 496 484">
                            <path d="M 166 389 Q 165 393 161 393 Q 155 393 155 389 Q 156 386 160 386 Q 165 386 166 389 L 166 389 Z M 135 385 Q 134 388 139 390 Q 144 391 145 388 Q 146 384 141 383 Q 136 382 135 385 L 135 385 Z M 179 383 Q 174 384 174 388 Q 175 391 180 391 Q 185 389 185 386 Q 184 383 179 383 L 179 383 Z M 245 0 Q 138 2 70 70 L 70 70 Q 2 138 0 244 Q 1 329 47 393 Q 93 457 170 483 Q 188 484 187 471 Q 187 467 187 456 Q 187 433 187 410 Q 185 410 168 412 Q 150 413 130 408 Q 110 402 102 380 Q 102 378 94 364 Q 86 351 74 343 Q 72 342 66 335 Q 59 329 76 328 Q 77 327 90 332 Q 103 336 114 354 Q 132 381 153 381 Q 175 381 187 375 Q 191 351 203 341 Q 159 339 126 319 Q 93 300 91 230 Q 91 210 97 197 Q 102 184 114 172 Q 112 166 110 148 Q 108 130 117 104 Q 135 101 159 115 Q 184 128 186 131 Q 186 131 186 131 Q 216 122 249 122 Q 281 122 312 131 Q 312 130 325 122 Q 337 114 353 108 Q 369 101 381 104 Q 390 130 388 148 Q 386 166 383 172 Q 395 184 402 197 Q 409 210 409 230 Q 408 278 392 301 Q 375 323 349 331 Q 323 339 294 341 Q 310 352 311 387 Q 311 424 311 453 Q 311 466 311 471 Q 310 484 328 483 Q 404 457 450 393 Q 495 329 496 244 Q 495 174 462 119 Q 428 64 372 32 Q 315 1 245 0 L 245 0 Z M 97 345 Q 95 347 98 350 Q 101 353 103 351 Q 105 349 102 346 Q 100 343 97 345 L 97 345 Z M 86 337 Q 86 339 89 341 Q 92 342 93 340 Q 94 338 91 336 Q 88 335 86 337 L 86 337 Z M 119 372 Q 117 375 120 379 Q 124 382 127 380 Q 128 377 125 373 Q 121 370 119 372 L 119 372 Z M 107 358 Q 105 360 107 364 Q 110 367 113 366 Q 115 364 113 360 Q 110 356 107 358 L 107 358 Z" />
                            </svg>
                        </a> 
                    </li>
                    
                    <li>
                        <a href = "http://www.linkedin.com/in/marion-salaun">
                           {/* linkedin icon by Free Icons (https://free-icons.github.io/free-icons/) */}
                            <svg xmlns="http://www.w3.org/2000/svg" height="2em" fill="currentColor" viewBox="0 0 448 448">
                            <path d="M 416 0 L 32 0 Q 18 0 9 9 Q 0 19 0 32 L 0 416 Q 0 429 9 439 Q 18 448 32 448 L 416 448 Q 430 448 439 439 Q 448 429 448 416 L 448 32 Q 448 19 439 9 Q 430 0 416 0 L 416 0 Z M 135 384 L 69 384 L 69 170 L 136 170 L 136 384 L 135 384 Z M 102 141 Q 86 141 75 130 L 75 130 Q 64 119 64 103 Q 64 86 75 75 Q 86 64 102 64 Q 119 64 129 75 Q 140 86 141 103 Q 140 119 129 130 Q 119 141 102 141 L 102 141 Z M 384 384 L 318 384 L 318 280 Q 319 260 313 242 Q 308 225 283 223 Q 258 224 250 240 Q 243 256 244 278 L 244 384 L 177 384 L 177 170 L 241 170 L 241 199 L 242 199 Q 248 186 264 176 Q 280 165 305 165 Q 354 166 370 194 Q 386 223 384 267 L 384 384 L 384 384 Z" />
                            </svg> 
                        </a>
                    </li>
                </ul>
            <p className='copyright'>Created by myself℠ with the moral support from my 🐶. Inspiration from <a href = "https://www.supah.it/portfolio">Fabio Ottaviani</a>. Made the 27th September 2023.</p>
        </div>
    )
}