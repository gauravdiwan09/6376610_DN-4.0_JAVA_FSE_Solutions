package com.library.service;

import com.library.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

public class BookService {

    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository){
        this.bookRepository = bookRepository;
    }

    public void getBook() {
        bookRepository.fetchBook();
        System.out.println("BookService: Book has been processed.");
    }
}
