package com.ttcdemo.controllers;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ttcdemo.entities.Product;
import com.ttcdemo.models.ProductModel;
import com.ttcdemo.repositories.DepotRepository;
import com.ttcdemo.repositories.ProductRepository;
import com.ttcdemo.response.JsonResponse;

@RequestMapping("/products")
@RestController
public class ProductController  {

	
	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private DepotRepository depotRepository;
	
	@GetMapping("/list")
	List<Product> getAll(){
		// we need to call associated repo !!
		
		return  this.productRepository.findAll();
		
	}
	
	
	@PostMapping("/add")
	public ResponseEntity<?> addProduct( @RequestBody ProductModel model ) {
		Product p = new Product();
		
		try {
			p.setPrice(model.getPrice());
			p.setName(model.getName());
			p.setQuantity(model.getQuantity());
			p.setDepot( this.depotRepository.findById(model.getDepot()).get() );
			
			
			return ResponseEntity.ok(this.productRepository.save(p));
		}catch(Exception e) {
			JsonResponse res = new JsonResponse();
			res.setSuccess(false);
			res.setMessage("depot not found !");
			
			return ResponseEntity.ok(res);
		}
	}
	
	
	
	@PostMapping("/update/{id}")
	public ResponseEntity<?> updateProduct( @RequestBody ProductModel model, @PathVariable long id ) {
		
		
		JsonResponse res = new JsonResponse();
		try {
			
			Product p = this.productRepository.findById(id).get();
			p.setPrice(model.getPrice());
			p.setName(model.getName());
			p.setQuantity(model.getQuantity());
			this.productRepository.save(p);
			res.setMessage("updated successfully ");
			res.setSuccess(true);
			return ResponseEntity.ok(res);
			
		}catch(NoSuchElementException ne) {
			res.setMessage("product not found !!");
			res.setSuccess(false);
			return ResponseEntity.ok(res);
		}catch( Exception e ) {
			
			res.setMessage("Somewthing went wrong , please try again.");
			res.setSuccess(false);
			return ResponseEntity.notFound().build().ok(res);
		}
		
		
	}
	
	
	
	

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteProduct( @PathVariable long id ) {
		JsonResponse res = new JsonResponse();
		try {
			Product p = this.productRepository.findById(id).get();
			this.productRepository.delete(p);
			res.setMessage("deletd successfully ");
			res.setSuccess(true);
			return ResponseEntity.ok(res);
			
		}catch(NoSuchElementException ne) {
			res.setMessage("product not found !!");
			res.setSuccess(false);
			return ResponseEntity.notFound().build().ok(res);
		}catch( Exception e ) {
			
			res.setMessage("Somewthing went wrong , please try again.");
			res.setSuccess(false);
			return ResponseEntity.notFound().build().ok(res);
		}
	}
	
	
	
	@GetMapping("/out-of-stock")
	List<Product> outOfStock(){
		return this.productRepository.findByQuantity(0);
	}
	
	
	
}









