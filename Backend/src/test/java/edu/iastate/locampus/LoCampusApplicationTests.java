package edu.iastate.locampus;

import edu.iastate.locampus.post.Post;
import edu.iastate.locampus.post.PostRepository;
import edu.iastate.locampus.role.Role;
import edu.iastate.locampus.role.RoleRepository;
import edu.iastate.locampus.user.User;
import edu.iastate.locampus.user.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest(classes=LoCampusApplicationTests.class)
class LoCampusApplicationTests {

	@MockBean
	private PostRepository postRepository;

	@MockBean
	private UserRepository userRepository;

	@MockBean
	private RoleRepository roleRepository;

	@Test
	void contextLoads() {
	}

	// Andrew Yunt
	@Test
	public void findAllPostsTest() {
		List<Post> posts = new ArrayList<>();
		Post post = new Post();
		posts.add(post);
		when(postRepository.findAll()).thenReturn(posts);
		assertEquals(1, posts.size());
	}

	// Andrew Yunt
	@Test
	public void findAllUsersTest() {
		List<User> users = new ArrayList<>();
		User user = new User("Test User", "test@iastate.edu", "testpass", "testpass");
		users.add(user);
		when(userRepository.findAll()).thenReturn(users);
		assertEquals(1, users.size());
	}

	@Test
	public void findAllRolesTest() {
		List<Role> roles = new ArrayList<>();
		Role roleOne = new Role();
		Role roleTwo = new Role();
		roles.add(roleOne);
		roles.add(roleTwo);
		when(roleRepository.findAll()).thenReturn(roles);
		assertEquals(2, roles.size());
	}

	//Andrew Yunt
	@Test
	public void testUserAttributes(){
		List<User> list = new ArrayList<User>();

		User userOne = new User("Test User", "test@iastate.edu", "testpass", "testpass");
		User userTwo = new User("Test User Two", "test2@iastate.edu", "password", "password");

		list.add(userOne);
		list.add(userTwo);

		assertEquals("Test User", list.get(0).getName());
		assertEquals("test@iastate.edu", list.get(0).getEmail());
		assertEquals("testpass", list.get(0).getPassword());
		assertEquals("testpass", list.get(0).getVerify());

		assertEquals(2, list.size());
	}
}
