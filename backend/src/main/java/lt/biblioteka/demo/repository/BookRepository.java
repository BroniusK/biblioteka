package lt.biblioteka.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import lt.biblioteka.demo.model.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Long>{

}