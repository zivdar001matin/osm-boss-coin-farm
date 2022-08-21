from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select, WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.firefox.options import Options
import pickle
import time
import datetime

USERNAME = '*****'
PASSWORD = '*****'

class SeleniumDriver(object):
    def __init__(
        self,
        # # chromedriver path
        # driver_path='/Users/username/work/chrome/chromedriver',
        # pickle file path to store cookies
        cookies_file_path='./cookies.pkl',
        # list of websites to reuse cookies with
        cookies_websites=["https://en.onlinesoccermanager.com/"]

    ):
        options = Options()
        # options.add_argument("--headless")
        self.cookies_file_path = cookies_file_path
        self.cookies_websites = cookies_websites
        self.driver = webdriver.Firefox(options=options)

        try:
            # load cookies for given websites
            cookies = pickle.load(open(self.cookies_file_path, "rb"))
            for website in self.cookies_websites:
                self.driver.get(website)
                for cookie in cookies:
                    self.driver.add_cookie(cookie)
                self.driver.refresh()
        except Exception as e:
            # it'll fail for the first time, when cookie file is not present
            print(str(e))
            print("Error loading cookies")

    def save_cookies(self):
        # save cookies
        cookies = self.driver.get_cookies()
        pickle.dump(cookies, open(self.cookies_file_path, "wb"))

    def close_all(self):
        # close all open tabs
        if len(self.driver.window_handles) < 1:
            return
        for window_handle in self.driver.window_handles[:]:
            self.driver.switch_to.window(window_handle)
            self.driver.close()

    def quit(self):
        self.save_cookies()
        self.close_all()

def is_fb_logged_in(driver):
    driver.get("https://en.onlinesoccermanager.com/Login")
    try:
        driver.find_element(By.ID, 'login')
        return False
    except:
        return True                

def fb_login(username, password, driver):
    WebDriverWait(driver, 20).until(EC.element_to_be_clickable(driver.find_element(By.ID, 'login')))
    
    username_box = driver.find_element(By.ID, 'manager-name')
    username_box.send_keys(username)

    password_box = driver.find_element(By.ID, 'password')
    password_box.send_keys(password)

    remember_box = driver.find_element(By.ID, 'remember-me')
    remember_box.click()

    login_box = driver.find_element(By.ID, 'login')
    login_box.click()

    try:
        WebDriverWait(driver, 15).until(lambda d : d.current_url == "https://en.onlinesoccermanager.com/Dashboard")
    except:
        WebDriverWait(driver, 15).until(lambda d : d.current_url == "https://en.onlinesoccermanager.com/Career")

def watch_boss_video(driver):
    driver.get("https://en.onlinesoccermanager.com/BusinessClub")
    time.sleep(10)
    video_button = driver.find_element(By.XPATH, '/html/body/div[3]/div[4]/div/div/div[2]/div[2]/div/div[1]/div')
    video_button.click()
    time.sleep(40)
    current_currency = selenium_object.driver.find_element(By.XPATH, '/html/body/div[3]/div[2]/div/div[3]/div/div[1]/div/span').text
    print(f"Current Boss coins: {current_currency}")

def watch_free_video(driver):
    try:
        driver.get("https://en.onlinesoccermanager.com/BusinessClub")
        time.sleep(10)
        try:
            video_button = driver.find_element(By.XPATH, '/html/body/div[3]/div[2]/div/div[5]/ul/li[7]/a')
        except:
            video_button = driver.find_element(By.XPATH, '/html/body/div[3]/div[2]/div/div[4]/ul/li[3]/a')
        video_button.click()
        time.sleep(10)
        video_button = driver.find_element(By.XPATH, '/html/body/div[3]/div[5]/div/div[2]/div[4]/div/div/div[3]/div/div[1]/div[2]/div/div')
        video_button.click()
        time.sleep(40)
    except Exception as e:
        print(e)
        pass
    try:
        driver.get("https://en.onlinesoccermanager.com/BusinessClub")
        time.sleep(10)
        try:
            video_button = driver.find_element(By.XPATH, '/html/body/div[3]/div[2]/div/div[5]/ul/li[7]/a')
        except:
            video_button = driver.find_element(By.XPATH, '/html/body/div[3]/div[2]/div/div[4]/ul/li[3]/a')
        video_button.click()
        time.sleep(10)
        video_button = driver.find_element(By.XPATH, '/html/body/div[3]/div[5]/div/div[2]/div[4]/div/div/div[3]/div/div[2]/div[2]/div[1]/div')
        video_button.click()
        time.sleep(40)
    except Exception as e:
        print(e)
        pass

if __name__ == '__main__':
    while True:
        try:
            selenium_object = SeleniumDriver()

            username = USERNAME
            password = PASSWORD

            if not is_fb_logged_in(selenium_object.driver):
                fb_login(username, password, selenium_object.driver)
            
            all_counter = 0
            counter = 4
            while True:
                watch_boss_video(selenium_object.driver)
                watch_free_video(selenium_object.driver)
                all_counter += 1
                print(all_counter)
                counter -= 1
                if counter == 0:
                    counter = 5
                    print(f'went to sleep: {datetime.datetime.now()}')
                    time.sleep(51*60)
                    print(f'woke up at: {datetime.datetime.now()}')
                continue
        except Exception as e:
            print(f'~~~~~~~~~~~~~~~~~~~\n{e}\n~~~~~~~~~~~~~~~~')
            selenium_object.quit()
