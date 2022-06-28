package lt.biblioteka.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "book")
public class Book {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "book_name")
	private String bookName;

	@Column(name = "book_description")
	private String bookDescripstion;

	@Column(name = "book_ISBN_number")
	private String isbnNumber;

	@Column(name = "pages_number")
	private int pagesNumber;

	public Book() {

	}

	public Book(String bookName, String bookDescripstion, String isbnNumber, int pagesNumber) {
		super();
		this.bookName = bookName;
		this.bookDescripstion = bookDescripstion;
		this.isbnNumber = isbnNumber;
		this.pagesNumber = pagesNumber;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getBookName() {
		return bookName;
	}

	public void setBookName(String BookName) {
		this.bookName = BookName;
	}

	public String getBookDescripstion() {
		return bookDescripstion;
	}

	public void setBookDescripstion(String bookDescripstion) {
		this.bookDescripstion = bookDescripstion;
	}

	public String getIsbnNumber() {
		return isbnNumber;
	}

	public void setIsbnNumber(String isbnNumber) {
		this.isbnNumber = isbnNumber;
	}

	public int getPagesNumber() {
		return pagesNumber;
	}

	public void setPagesNumber(int pagesNumber) {
		this.pagesNumber = pagesNumber;
	}
}
