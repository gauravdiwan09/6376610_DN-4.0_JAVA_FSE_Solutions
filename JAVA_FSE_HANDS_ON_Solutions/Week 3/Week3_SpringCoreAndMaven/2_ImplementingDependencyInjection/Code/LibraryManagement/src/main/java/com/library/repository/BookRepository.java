package com.library.repository;

import org.springframework.stereotype.Component;

public class BookRepository {
    public void fetchBook() {
        System.out.println("BookRepository: Fetching book from the database.");
    }
}
